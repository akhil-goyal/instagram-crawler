const puppeteer = require('puppeteer');
const secrets = require('./secrets');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://instagram.com');

    await page.waitForSelector('input');

    const inputs = await page.$$('input');

    await inputs[0].type(secrets.USERNAME);
    await inputs[1].type(secrets.PASSWORD);

    const loginButton = (await page.$$('button'))[1];
    await loginButton.click();

    await page.waitForNavigation();
    await page.goto(`https://instagram.com/${secrets.USERNAME}`);
    await page.waitForSelector('article a');

    await (await page.$('article a')).click();
    await page.waitForTimeout(1000);
    const likeButton = (await page.$('.ltpMr span'));
    await likeButton.click();

    await browser.close();
})();