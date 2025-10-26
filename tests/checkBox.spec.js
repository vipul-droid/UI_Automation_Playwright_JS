import {test, expect} from '@playwright/test'

test("Opening page: Listing all element  ", async ({page})=>{
    await page.goto("https://automationexercise.com/");
    console.log("URL of Page of : ", await page.url());

    // ul and li
    const row = page.locator('//div[@class="shop-menu pull-right"]//ul/li').nth(4)
    let valueOfMenu = await row.textContent();
    console.log(valueOfMenu);

    await row.click();
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000)
    console.log("URL of Page of : ", await page.url());

    // const headCheckBox = page.locator('h3');
    // console.log("Heading of Page: ", await headCheckBox.textContent())


})




