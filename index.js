const puppeteer = require('puppeteer');

const userName = 'my.creative.lens';
const password = 'Unsafe@88';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://instagram.com');

    await page.waitForSelector('input');

    const inputs = await page.$$('input');

    await inputs[0].type(userName);
    await inputs[1].type(password);

    // await browser.close();
})();