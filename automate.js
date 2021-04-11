const puppeteer = require('puppeteer');
let tab;
let search = "mouse";
    
(async function(){

try {
    //opens the browser
    let browser = await puppeteer.launch({ headless : false , defaultViewport: null, args : ["--start-maximized"]});

    // get all pages and then choose the first tab
    let allpages = await browser.pages();
    tab = allpages[0];

    // goto the URL
    await tab.goto("https://amazon.in");

    // search for the element
    await tab.type("#twotabsearchtextbox",search);
    await tab.click("#nav-search-submit-button");

    // access and click 4 star and above rating
    await tab.waitForSelector(".a-star-medium-4", {visible : true})
    await tab.click(".a-star-medium-4");

    // choose the range
    await tab.waitForSelector(".a-star-medium-4", {visible : true})
    await tab.click(".a-star-medium-4");
        
} catch (error) {
        console.log(error);
    }
})();


console.log("Amazon Automation will start soon");
