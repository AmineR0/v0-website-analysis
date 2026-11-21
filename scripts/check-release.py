"""Usage: python3 scripts/check-release.py [local or production origin]."""

import sys
from html.parser import HTMLParser
from urllib.parse import urlsplit
from urllib.request import urlopen
from urllib.robotparser import RobotFileParser
from xml.etree import ElementTree

CANONICAL = "https://www.bacresultat.com"
origin = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else CANONICAL
publisher = "pub-1097439023725884"
loader = f"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-{publisher}"


def read(path):
    with urlopen(origin + path, timeout=20) as response:
        assert response.status == 200, path
        assert "noindex" not in response.headers.get("X-Robots-Tag", "").lower(), path
        return response.read().decode("utf-8")


class Head(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_head = False
        self.canonicals = []
        self.loaders = []
        self.robots = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "head":
            self.in_head = True
        if self.in_head and tag == "link" and a.get("rel") == "canonical":
            self.canonicals.append(a.get("href"))
        if tag == "script" and a.get("src", "").startswith(loader.split("?")[0]):
            self.loaders.append((self.in_head, a.get("src")))
        if tag == "meta" and a.get("name") in ("robots", "googlebot"):
            self.robots.append(a.get("content", "").lower())

    def handle_endtag(self, tag):
        if tag == "head":
            self.in_head = False


robots = RobotFileParser()
robots.parse(read("/robots.txt").splitlines())
assert CANONICAL + "/sitemap.xml" in (robots.site_maps() or []), "Missing sitemap in robots.txt"
assert f"google.com, {publisher}, DIRECT, f08c47fec0942fa0" in read("/ads.txt").splitlines()
urls = [e.text for e in ElementTree.fromstring(read("/sitemap.xml")).findall("{*}url/{*}loc")]
assert {CANONICAL + p for p in ("/", "/contact", "/about", "/terms", "/privacy")} <= set(urls)
assert any("/guides/" in url for url in urls), "Missing guides"
for url in urls:
    assert url.startswith(CANONICAL + "/") and robots.can_fetch("Googlebot", url), url
    head = Head()
    head.feed(read(urlsplit(url).path))
    assert [u.rstrip("/") for u in head.canonicals] == [url.rstrip("/")], (url, head.canonicals)
    assert all("noindex" not in rule for rule in head.robots), url
    assert head.loaders == [(True, loader)], (url, "Expected one AdSense script in head")
print(f"Passed: {len(urls)} sitemap URLs, canonicals, robots.txt, ads.txt and AdSense on {origin}")
