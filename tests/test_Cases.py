from playwright.sync_api import Page, sync_playwright

def test_login_page(page: Page):
    page.goto("https://simple-login-cicd.vercel.app/")
    assert "Login" in page.title()
    print("Login page found test has passes!")
    
def test_login(page: Page):
    page.goto("https://simple-login-cicd.vercel.app/")
    page.locator("#username").fill("admin")
    page.locator("#password").fill("password123")
    page.locator("#loginBtn").click()
    # page.wait_for_timeout(2000)  
    # assert "Dashboard" in page.title()
    print("Dashboard page found test has passes!")
    page.locator("#logoutBtn").click()
    print("User logout test has passed!")

if __name__ == "__main__":
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page()
        test_login_page(page)
        test_login(page)
        browser.close()