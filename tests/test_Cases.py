from playwright.sync_api import Page, sync_playwright


def test_login(page: Page):
    page.goto("https://simple-login-cicd.vercel.app/")
    assert "Login" in page.title()
    print("Login page found test has passes!")
    
if __name__ == "__main__":
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page()
        test_login(page)
        browser.close()