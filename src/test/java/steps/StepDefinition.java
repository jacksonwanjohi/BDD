
package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefinition {
	WebDriver driver;
	LoginPage loginpage;

	@Before
	public void beforeRun() {
		driver = BrowserFactory.startBrowser();
		loginpage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("^User is on the Techfios login page$")
	public void User_is_on_the_Techfios_login_page() throws InterruptedException {
		// driver= BrowserFactory.startBrowser();
		driver.get("https://techfios.com/billing/?ng=admin/");
		Thread.sleep(2000);
	}

	@When("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String username) throws InterruptedException {
		loginpage.enterUserName(username);
		Thread.sleep(2000);
	}

	@When("^User enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) throws InterruptedException {
		loginpage.enterPassword(password);
		Thread.sleep(2000);
	}

	@When("^User clicks on signin button$")
	public void User_clicks_on_signin_button() throws InterruptedException {
		loginpage.clickOnSignInButton();
		Thread.sleep(2000);
	}

	@Then("^User should land on Dashboard page$")
	public void User_should_land_on_Dashboard_page() throws IOException {
		Assert.assertEquals("Dashboard- iBilling", loginpage.getPageTitle());
		loginpage.takeScreenshotAtEndOfTest(driver);
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		loginpage.enterCredentials(username, password);
	}

	@When("^User clicks on bank and cash$")
	public void User_clicks_on_bank_and_cash() throws Exception {
		loginpage.clickonBankandCash();
	}

	@When("^User clicks on new account$")
	public void User_clicks_on_new_account() throws Throwable {
		Thread.sleep(3000);
		loginpage.ClickonAddNewAccount();
	}
		
	@Then("^User fill up the form entering \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\" and clicks on submit$")

	public void user_fill_up_the_form_entering_and_and_and_and_and_and_and_clicks_on_submit(String accname, String desc,
			String balance, String Accnum, String person, String contact, String url) throws Throwable {
		loginpage.ClickOnAccountTitle(accname);
		loginpage.description(desc);
		loginpage.initialBalance(balance);
		loginpage.accountNumber(Accnum);
		loginpage.insertContactPerson(person);
		loginpage.contactPhone(contact);
		loginpage.BankingUrl(url);
		Thread.sleep(2000);
		loginpage.ClickOnSubmit();
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}

}
