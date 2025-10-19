const { chromium, firefox } = require('playwright');

const automation = async (browserType) => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');
    // Perform actions on the page
    console.log("the page title is", browserType.name(), await page.title());
    await browser.close();
};

automation(chromium);
automation(firefox);