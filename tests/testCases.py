from playwright.sync_api import Page


def testLogin(page: Page):
    page.goto("https://kjsadhk.com")
    assert "Login" in page.title
    