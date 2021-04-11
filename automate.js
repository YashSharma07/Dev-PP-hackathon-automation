const puppeteer = require('puppeteer');
let tab;
let search = "mouse";
let price = 1000;
    
(async function(){

try {
    //opens the browser
    let browser = await puppeteer.launch({ headless : false , defaultViewport: null, args : ["--start-maximized"], slowMo : 100});

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
    if(price <= 1000){
        await tab.waitForSelector("[aria-labelledby='p_36-title'] li", {visible : true})
        await tab.click("[aria-labelledby='p_36-title'] li");
    }
    else{
        await tab.waitForSelector("[aria-labelledby='p_36-title'] li:nth-child(2)", {visible : true})
        await tab.click("[aria-labelledby='p_36-title'] li:nth-child(2)");
    }
        
} catch (error) {
        console.log(error);
    }
})();


console.log("Amazon Automation will start soon...");

