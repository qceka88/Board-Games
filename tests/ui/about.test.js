const {test, expect} = require('@playwright/test');
const pageURL = "https://qceka88-exam.onrender.com/"

test('Check about page', async ({page}) => {
    await page.goto(pageURL + 'about');
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toBe('About');
});
