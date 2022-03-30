describe('Ecommerce Application', () =>
{
    it('login page title', () =>
    {
        // WebdriverIO code
        browser.url("https://rahulshettyacademy.com/AutomationPractice/"); // Open website.
        browser.maximizeWindow();

        $("#radio-btn-example > fieldset > label:nth-child(3) > input").click(); // • Click the second radio button.
        $("#autocomplete").setValue("Israel"); // •	On the suggestion class example – write “Israel”.
        $("#dropdown-class-example").selectByVisibleText("Option3"); // • On the drop-down example – choose the last options.
        browser.pause(2000);

        // • Click on the switch window example and close it.
        $("#openwindow").click(); 
        browser.switchWindow("http://www.qaclickacademy.com/");
        browser.pause(2000);
        browser.closeWindow();
        
        // • Click on the open tab - return to the previous one.
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/");
        $("#opentab").click();
        browser.pause(2000);
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/");

        // • Send keys to the alert filed and click alert - close it.
        $("#name").setValue("Dor Cohen");
        $("#alertbtn").click();
        browser.pause(2000);
        browser.acceptAlert();

        // • Scroll to Mouse Hover example and click reload - validate the tab title.
        $("#mousehover").scrollIntoView();
        $("#mousehover").moveTo();
        browser.pause(2000);
        $("body > div:nth-child(6) > div > fieldset > div > div > a:nth-child(2)").click();
        browser.pause(2000);
        expect(browser).toHaveTitle("Practice Page");

        });
});
