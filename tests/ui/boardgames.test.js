const {test, expect} = require('@playwright/test');
const pageURL = "https://qceka88-exam.onrender.com/"

test('Check boardgames page', async ({page}) => {
    await page.goto(pageURL + 'boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
});
  