const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // property
  await page.click('id=login2')

  // CSS
    //   await page.locator('#loginusername').fill('kieutrang')
    await page.fill('#loginusername','pavanol')

   //xPath
   await page.fill("input[id='loginpassword']",'test@123') 

   // click on login button
   await page.click("//button[normalize-space()='Log in']")

   // verify logout link
   const logout = await page.locator("//a[normalize-space()='Log out']")

   await expect(logout).toBeVisible();
   await page.close()
})