package steps;

import com.testinium.deviceinformation.exception.DeviceNotFoundException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.LoginPage;
import pages.ProductsPage;
import setups.DriverSetup;

import java.io.IOException;

public class LoginStep {
    LoginPage loginPage = new LoginPage(DriverSetup.getAppiumDriver());
    ProductsPage productsPage = new ProductsPage(DriverSetup.getAppiumDriver());

    public LoginStep() throws IOException, DeviceNotFoundException {
    }

    @Given("^user input username \"([^\"]*)\"$")
    public void userInputUsername(String username){
        loginPage.inputUsername(username);
    }

    @And("^user input password \"([^\"]*)\"$")
    public void userInputPassword(String password) {
        loginPage.inputPassword(password);
    }

    @And("^user click Login button$")
    public void userClickLoginButton() {
        loginPage.clickLogin();
    }

    @Then("^user redirected to \"([^\"]*)\" page$")
    public void userRedirectedToProductPage(String expected) {
        productsPage.readTitlePage(expected);
    }

    @Then("^warning message appear \"([^\"]*)\"$")
    public void warningMessageAppear(String expected) {
        loginPage.readErrMessage(expected);
    }
}