const {test, expect} = require('@playwright/test');

const pageURL = "http://localhost:8080/"

test('Check footer', async ({page}) => {
    await page.goto(pageURL);
    const footer = await page.$('footer');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps regular exam');
});
  