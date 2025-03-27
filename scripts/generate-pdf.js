import { chromium } from "playwright";

const main = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://manuelxavier.pt", { waitUntil: "networkidle" });

  await page.emulateMedia({media:"screen"});

  await page.pdf({
    path: "public/resume.pdf",
    printBackground: true
  });

  return browser.close();
};

main();
