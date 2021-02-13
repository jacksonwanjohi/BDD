Feature: Validate Login
 
 Background: 
	Given User is on the Techfios login page  
 
 @NewUserBankAccount
 Scenario Outline: Login to Techfios as a valid user and be able to create new bank account
 	When User enters "<userName>" and "<password>"
 	And User clicks on signin button 
	Then User should land on Dashboard page 
 	When User clicks on bank and cash 
	When User clicks on new account 
	Then User fill up the form entering "<accountTitle>"and "<description>"and "<initialBalance>"and "<accountNumber>"and "<contactPerson>"and "<phone>"and "<internetBankingUrl>" and clicks on submit 

	
	Examples: 
	
|userName 			|password   |accountTitle|description	|initialBalance	|accountNumber	|contactPerson	|phone 		|internetBankingUrl|
|demo@techfios.com 	|abc123		|CucumberHW  |Checking  	|$40,000 		|29856473 		|Bond 			|323476565	|www.bankofamerica.com|