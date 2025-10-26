import { test, expect } from '@playwright/test';


test("Selenium Web Page", async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    console.log(await page.url())

    // const header1 = await page.locator('h1').textContent();
    // console.log(header1)
    // const header2 = await page.locator('h2').textContent();
    // console.log(header2)

    const row = page.locator('ul').locator('li').nth(5)


    
    console.log(await row.textContent())
    await row.click()

    // await page.waitForLoadState('networkidle');
    // console.log(await page.url())

    await page.waitForLoadState('domcontentloaded'); 
    console.log(await page.url())

    const checkBox = page.locator('#checkboxes input').nth(0)
    await checkBox.waitFor({ state: 'visible' });
    await checkBox.click()
    await expect(checkBox).toBeChecked();

   // console.log(await locTable.textContent());
    
})