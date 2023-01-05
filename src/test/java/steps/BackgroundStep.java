package steps;

import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;
import setups.DriverSetup;

import java.io.IOException;

public class BackgroundStep {
    LoginPage loginPage = new LoginPage(DriverSetup.getAppiumDriver());

    public BackgroundStep() throws IOException, DeviceNotFoundException {
    }

    @Given("^user launch the Sauce Demo app$")
    public void userLaunchTheSauceDemoApp() {

    }

    @Then("^Sauce Demo app will displayed$")
    public void sauceDemoAppWillDisplayed() throws IOException, DeviceNotFoundException {
        loginPage.seeBotImg();
    }
}