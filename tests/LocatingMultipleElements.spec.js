const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  const links = await page.$$('a');

  for(const link of links) 
  {
    const linkText = await link.textContent();
    console.log(linkText)
  }

})