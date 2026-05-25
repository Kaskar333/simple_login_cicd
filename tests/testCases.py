from playwright.sync_api import Page


def testLogin(page: Page):
    page.goto("https://simple-login-cicd.vercel.app/")
    assert "Login" in page.title
    