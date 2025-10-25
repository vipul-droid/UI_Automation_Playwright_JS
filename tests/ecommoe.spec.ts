import {test, expect} from '@playwright/test'

test.describe.serial("Both Ecommer" , () => {
    // test("Ecommer",  async({page})=>{
    //     await page.goto("https://automationexercise.com/")
    //     console.log(await page.url());
    //     page.locator('//div[@class="productinfo text-center"]/h2')
    //     const priceLocator1 = page.locator('.productinfo.text-center h2')
    //     const priceLocator2 = page.locator('.productinfo.text-center').locator('h2')
    //     let ele1 = await priceLocator2.nth(0).textContent()
    //     console.log(ele1)
        
    //     let ele = await priceLocator2.allTextContents()
    //     let prices = ele.map((price) => {
    //         // 1. Remove prefix by starting at index 4 (shorter syntax)
    //         let cleanString = price.substring(4);
            
    //         // 2. Convert to integer with explicit radix 10
    //         return parseInt(cleanString, 10);
    //     });
    //     console.log('Price of all element ', prices)

    //     prices.sort((a,b)=> a-b);
    //     console.log('Sorted ', prices)
    // })


    test("Flipkart price Ascending order", async ({page}) =>{
        await page.goto("https://www.flipkart.com/")
        console.log(page.url());
        const searchInput  =  page.locator('.Pke_EE')
        await searchInput.fill("mobile")
        await searchInput.press('Enter')

        const priceLocatorString = "//div[contains(@class, 'hl05eU')]/div[contains(@class, 'Nx9bqj') and contains(@class, '_4b5DiR')]";
        // Wait for at least one of the price elements to be visible
        await page.waitForSelector(priceLocatorString);
        // --- 3. Interaction (Now Safe) ---
        // Use the validated locator string to create the locator object
        const priceLoc = page.locator(priceLocatorString);
        const prices = await priceLoc.allTextContents();


        const priceLoc2 = '.hl05eU .Nx9bqj._4b5DiR'
        await page.waitForSelector(priceLoc2)
        const priceLocator2 = await page.locator(priceLoc2);
        let prices2 = await priceLocator2.allTextContents();
        
        let priceArr = prices2.map((price) => {
            let val = '';
            for(let i=0; i<price.length; i++){
                if(price[i] <= '9' &&  price[i] >= '0'){
                    val = val + price[i];
                }
   
            } 
            
            return parseInt(val)
        })

        priceArr.sort((a,b) => a - b )
        console.log(priceArr)

    })

})

