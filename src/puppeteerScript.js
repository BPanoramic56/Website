const puppeteer = require('puppeteer');
const fs = require('fs');

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.flightaware.com/live/fleet/');

const airlines = await page.evaluate(() => Array.from(document.querySelectorAll('tr td a'), element => element.textContent));

  console.log(airlines);
  console.log(await page.title());
  fs.writeFile("./src/docs/AirlineInfo.txt", airlines.toString(), (err) =>{
    if (err) throw err;
  })
  await browser.close();
  
}

run();
