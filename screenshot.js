const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/root/.cache/ms-playwright/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const filePath = 'file://' + path.join(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  // Get hero section bounds
  const hero = await page.$('section');
  if (hero) {
    const box = await hero.boundingBox();
    await page.screenshot({
      path: 'hero.png',
      clip: {
        x: box.x,
        y: box.y,
        width: box.width,
        height: box.height,
      },
    });
    console.log('Hero screenshot saved to hero.png');
  } else {
    // Fallback: full page above fold
    await page.screenshot({ path: 'hero.png', clip: { x: 0, y: 0, width: 1440, height: 900 } });
    console.log('Fallback screenshot saved to hero.png');
  }

  await browser.close();
})();
