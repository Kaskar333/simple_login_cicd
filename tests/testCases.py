from playwright.sync_api import Page


def testLogin(page: Page):
    page.goto("https://vercel.com")
    assert "Login" in page.title
    