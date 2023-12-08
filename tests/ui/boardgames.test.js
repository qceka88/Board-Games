const {test, expect} = require('@playwright/test');
const pageURL = "http://localhost:8080/"

test('Check boardgames page', async ({page}) => {
    await page.goto(pageURL + 'boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
});
  