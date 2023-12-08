const {test, expect} = require('@playwright/test');
const pageURL = "http://localhost:8080/"

test('Check home page', async ({page}) => {
    await page.goto(pageURL);
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('Boardgames Collection');
});
  