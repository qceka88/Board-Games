const {test, expect} = require('@playwright/test');
const pageURL = "https://qceka88-exam.onrender.com/"

test('Check add boardgame page', async ({page}) => {
    await page.goto(pageURL + 'add-boardgame');
    const form = await page.$('form');
    expect(form).toBeTruthy();
});
  