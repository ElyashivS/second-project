describe('Ecommerce Application', () =>
{
    it('login page title', () =>
    {
        //webdriverIO code
        browser.url("https://www.google.com");
        console.log(browser.getTitle());
        expect(browser).toHaveTitleContaining("asssasas");
    });
});