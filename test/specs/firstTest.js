describe('Ecommerce Application', () =>
{
    it('login page title', () =>
    {
        //webdriverIO code
        browser.url("https://www.google.com/");
        expect(browser).toHaveTitleContaining("Google");
        // Test
    });
});