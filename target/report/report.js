$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Scenarios",
  "description": "This cases is for Login feature which is every case will started with Background first.",
  "id": "login-scenarios",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 32581230800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 185257600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 2524055800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "TC001 - User login with correct credential",
  "description": "",
  "id": "login-scenarios;tc001---user-login-with-correct-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@TC001"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user input username \"standard_user\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user input password \"secret_sauce\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user redirected to \"PRODUCTS\" page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 2983355400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 2060982600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 876587900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PRODUCTS",
      "offset": 20
    }
  ],
  "location": "LoginStep.userRedirectedToProductPage(String)"
});
formatter.result({
  "duration": 3504448000,
  "status": "passed"
});
formatter.after({
  "duration": 1112129700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 23,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;1"
    },
    {
      "cells": [
        "",
        "",
        "Username is required"
      ],
      "line": 24,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2"
    },
    {
      "cells": [
        "standard_user",
        "",
        "Password is required"
      ],
      "line": 25,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3"
    },
    {
      "cells": [
        "",
        "secret_sauce",
        "Username is required"
      ],
      "line": 26,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4"
    },
    {
      "cells": [
        "standarduser",
        "secretsauce",
        "Username and password do not match any user in this service."
      ],
      "line": 27,
      "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29836047300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 1387400,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 2670845600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 3451072200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 1780996000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 940822600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 176305000,
  "status": "passed"
});
formatter.after({
  "duration": 1129635200,
  "status": "passed"
});
formatter.before({
  "duration": 28861174000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 403900,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 3048245800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Password is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 2251975200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 2162863300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 815912600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 706605500,
  "status": "passed"
});
formatter.after({
  "duration": 1032541300,
  "status": "passed"
});
formatter.before({
  "duration": 28366510400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 884600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 3169248800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Username is required\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 2354933800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 2354964600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 719469200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username is required",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 706125700,
  "status": "passed"
});
formatter.after({
  "duration": 958049800,
  "status": "passed"
});
formatter.before({
  "duration": 29202140800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User launch the AUT",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user launch the Sauce Demo app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Sauce Demo app will displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStep.userLaunchTheSauceDemoApp()"
});
formatter.result({
  "duration": 367800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStep.sauceDemoAppWillDisplayed()"
});
formatter.result({
  "duration": 3000815300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TC002 - User login with incorrect credentials",
  "description": "",
  "id": "login-scenarios;tc002---user-login-with-incorrect-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 16,
      "name": "@TC002"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user input username \"standarduser\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user input password \"secretsauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "warning message appear \"Username and password do not match any user in this service.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "standarduser",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputUsername(String)"
});
formatter.result({
  "duration": 2974591000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secretsauce",
      "offset": 21
    }
  ],
  "location": "LoginStep.userInputPassword(String)"
});
formatter.result({
  "duration": 1904201100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userClickLoginButton()"
});
formatter.result({
  "duration": 937587200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username and password do not match any user in this service.",
      "offset": 24
    }
  ],
  "location": "LoginStep.warningMessageAppear(String)"
});
formatter.result({
  "duration": 750063300,
  "status": "passed"
});
formatter.after({
  "duration": 1494846700,
  "status": "passed"
});
});