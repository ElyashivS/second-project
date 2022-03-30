describe('Ecommerce Application', () =>
{
    it('login page title', () =>
    {
        // WebdriverIO code
        // https://www.amazon.com/?language=en_US
        browser.url("https://www.amazon.com/"); // Open website in English.
        browser.maximizeWindow();

        // Search an “apple pencil”.
        $("#twotabsearchtextbox").setValue("apple pencil");
        $("#nav-search-submit-button").click();

        // Click on one of the options and add it to your cart.
        // $("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(6) > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.a-section.a-spacing-none.s-padding-right-small.s-title-instructions-style > h2 > a > span").click();
        browser.url("https://www.amazon.com/Stylus-Pen-Apple-iPad-Pencil/dp/B08JCKK9CC/ref=sr_1_4?keywords=apple+pencil&qid=1648645360&sprefix=apple+pen%2Caps%2C563&sr=8-4")
        $("#add-to-cart-button").click();

        // Validate that your cart has 1 item on the right top corner.
        expect($("#nav-cart-count")).toHaveText("1");

        // Search for “airpods 2nd generation” and click on of the options.
        $("#twotabsearchtextbox").setValue("airpods 2nd generation");
        $("#nav-search-submit-button").click();
        // $("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(5) > div > div > div > div > div > div.sg-col.sg-col-4-of-12.sg-col-8-of-16.sg-col-12-of-20.s-list-col-right > div > div > div.a-section.a-spacing-none.s-padding-right-small.s-title-instructions-style > h2 > a > span").click();
        browser.url("https://www.amazon.com/-/he/Apple-AirPods-%D7%A2%D7%9D-%D7%9B%D7%99%D7%A1%D7%95%D7%99-%D7%98%D7%A2%D7%99%D7%A0%D7%94/dp/B07SKLLYTW/ref=sr_1_3?keywords=airpods+2nd+generation&qid=1648645099&sr=8-3");


        // Choose the quantity of 2 pieces and add them to the cart.
        $("#a-autoid-0-announce").click();
        $("#quantity_1").click();
        $("#add-to-cart-button").click();
        $("#attach-close_sideSheet-link").click();

        // Validate that your cart has 3 items.
        expect($("#nav-cart-count")).toHaveText("3");

        // Sum the prices and validate the total amount.

        // TODO: fix this
        $("#nav-cart").click();

        let firstItem = $("(//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold'])");
        let secondItem = $("/html/body/div[1]/div[2]/div[3]/div[4]/div/div[2]/div[1]/div/form/div[2]/div[4]/div[4]/div/div[2]/p/span");
        console.log(firstItem.getText());
        console.log(secondItem.getText());
        // firstItem = String(firstItem).substring(1);
        // secondItem = String(secondItem).substring(1);
        // let sum = parseInt(firstItem) + parseInt(secondItem);
        // console.log(sum);
        
        });
});
