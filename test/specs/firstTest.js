describe('Ecommerce Application', () =>
{
    it('login page title', () =>
    {
        //webdriverIO code
        browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        browser.maximizeWindow();
        $("#radio-btn-example > fieldset > label:nth-child(3) > input").click();
        $("#autocomplete").setValue("Israel");
        $("#dropdown-class-example").selectByVisibleText("Option3");
        browser.pause(2000);
        $("#openwindow").click();
        browser.switchWindow("http://www.qaclickacademy.com/");
        browser.pause(2000);
        browser.closeWindow();
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/");
        $("#opentab").click();
        browser.pause(2000);
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/");
        $("#name").setValue("Dor Cohen");
        $("#alertbtn").click();
        browser.pause(2000);
        browser.acceptAlert();
        $("#mousehover").scrollIntoView();
        $("#mousehover").moveTo();
        browser.pause(2000);
        $("body > div:nth-child(6) > div > fieldset > div > div > a:nth-child(2)").click();
        browser.pause(2000);
        expect(browser).toHaveTitle("Practice Page");
        });
});
