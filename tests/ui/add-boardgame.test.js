const {test, expect} = require('@playwright/test');
const pageURL = "http://localhost:8080/"

test('Check add boardgame page', async ({page}) => {
    await page.goto(pageURL + 'add-boardgame');
    const form = await page.$('form');
    expect(form).toBeTruthy();
});
  