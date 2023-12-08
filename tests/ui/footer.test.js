const {test, expect} = require('@playwright/test');

const pageURL = "https://qceka88-exam.onrender.com/"

test('Check footer', async ({page}) => {
    await page.goto(pageURL);
    const footer = await page.$('footer');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps regular exam');
});
  