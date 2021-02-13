$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OtherLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Login",
  "description": "",
  "id": "validate-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login to Techfios as a valid user and be able to create new bank account",
  "description": "",
  "id": "validate-login;login-to-techfios-as-a-valid-user-and-be-able-to-create-new-bank-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@NewUserBankAccount"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User fill up the form entering \"\u003caccountTitle\u003e\"and \"\u003cdescription\u003e\"and \"\u003cinitialBalance\u003e\"and \"\u003caccountNumber\u003e\"and \"\u003ccontactPerson\u003e\"and \"\u003cphone\u003e\"and \"\u003cinternetBankingUrl\u003e\" and clicks on submit",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "validate-login;login-to-techfios-as-a-valid-user-and-be-able-to-create-new-bank-account;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingUrl"
      ],
      "line": 18,
      "id": "validate-login;login-to-techfios-as-a-valid-user-and-be-able-to-create-new-bank-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "CucumberHW",
        "Checking",
        "$40,000",
        "29856473",
        "Bond",
        "323476565",
        "www.bankofamerica.com"
      ],
      "line": 19,
      "id": "validate-login;login-to-techfios-as-a-valid-user-and-be-able-to-create-new-bank-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6056834900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_login_page()"
});
formatter.result({
  "duration": 5562042200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login to Techfios as a valid user and be able to create new bank account",
  "description": "",
  "id": "validate-login;login-to-techfios-as-a-valid-user-and-be-able-to-create-new-bank-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@NewUserBankAccount"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on bank and cash",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on new account",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User fill up the form entering \"CucumberHW\"and \"Checking\"and \"$40,000\"and \"29856473\"and \"Bond\"and \"323476565\"and \"www.bankofamerica.com\" and clicks on submit",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1239162700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_signin_button()"
});
formatter.result({
  "duration": 5383788200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 470278900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_bank_and_cash()"
});
formatter.result({
  "duration": 163948500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_new_account()"
});
formatter.result({
  "duration": 6221596900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CucumberHW",
      "offset": 32
    },
    {
      "val": "Checking",
      "offset": 48
    },
    {
      "val": "$40,000",
      "offset": 62
    },
    {
      "val": "29856473",
      "offset": 75
    },
    {
      "val": "Bond",
      "offset": 89
    },
    {
      "val": "323476565",
      "offset": 99
    },
    {
      "val": "www.bankofamerica.com",
      "offset": 114
    }
  ],
  "location": "StepDefinition.user_fill_up_the_form_entering_and_and_and_and_and_and_and_clicks_on_submit(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 7981713400,
  "status": "passed"
});
formatter.after({
  "duration": 1122854300,
  "status": "passed"
});
});