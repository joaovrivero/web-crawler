const { crawlPage } = require("./crawl.js");
const { printReport } = require("./report.js");

async function main() {
  if (process.argv.length < 3) {
    console.log("no website provided");
    process.exit(1);
  }
  if (process.argv.length > 3) {
    console.log("too many arguments provided");
    process.exit(1);
  }

  const baseURL = process.argv[2];

  console.log(`Starting crawl of: ${baseURL}...`);

  try {
    const pages = await crawlPage(baseURL, baseURL, {});
    printReport(pages);
  } catch (err) {
    console.error(`Error during crawling: ${err.message}`);
    process.exit(1);
  }
}

main();
