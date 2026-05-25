from playwright.sync_api import Page


def test_login(page: Page):
    page.goto("https://simple-login-cicd.vercel.app/")
    assert "Login" in page.title
    print("Login page found test has passes!")
    
