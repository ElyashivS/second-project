describe('Ecommerce Application', () =>
{
    it('Amazon web', () =>
    {
        // WebdriverIO code
        browser.url("https://www.amazon.com/"); // Open Amazon website
        browser.maximizeWindow();

        // Search an “apple pencil”.
        $("#twotabsearchtextbox").setValue("apple pencil");
        $("#nav-search-submit-button").click();

        // Click on one of the options and add it to your cart.
        browser.url("https://www.amazon.com/Stylus-Pen-Apple-iPad-Pencil/dp/B08JCKK9CC/ref=sr_1_4?keywords=apple+pencil&qid=1648645360&sprefix=apple+pen%2Caps%2C563&sr=8-4");
        let firstItem = $("#corePrice_feature_div > div > span > span:nth-child(2)").getText();
        firstItem = String(firstItem).replace("$", "");
        $("#add-to-cart-button").click();

        // Validate that your cart has 1 item on the right top corner.
        expect($("#nav-cart-count")).toHaveText("1");

        // Search for “airpods 2nd generation” and click on of the options.
        $("#twotabsearchtextbox").setValue("airpods 2nd generation");
        $("#nav-search-submit-button").click();
        browser.url("https://www.amazon.com/-/he/Apple-AirPods-%D7%A2%D7%9D-%D7%9B%D7%99%D7%A1%D7%95%D7%99-%D7%98%D7%A2%D7%99%D7%A0%D7%94/dp/B07SKLLYTW/ref=sr_1_3?keywords=airpods+2nd+generation&qid=1648645099&sr=8-3");
        let secondItem = $("#corePrice_feature_div > div > span > span:nth-child(2)").getText();
        secondItem = String(secondItem).replace("$", "");

        // Choose the quantity of 2 pieces and add them to the cart.
        $("#a-autoid-0-announce").click();
        $("#quantity_1").click();
        $("#add-to-cart-button").click();
        browser.waitUntil( () => $("#attach-close_sideSheet-link").isDisplayed());
        $("#attach-close_sideSheet-link").waitForDisplayed();
        $("#attach-close_sideSheet-link").click();

        // Validate that your cart has 3 items.
        expect($("#nav-cart-count")).toHaveText("3");

        // Sum the prices and validate the total amount.

        $("#nav-cart").click();
        let expSum = (parseFloat(firstItem) + (parseFloat(secondItem) * 2));
        let actSum = $("(//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap'])").getText();
        actSum = String(actSum).replace("$", "").replace(" ", "");
        actSum = parseFloat(actSum);
        expect(expSum).toEqual(actSum);
        
        });
});
