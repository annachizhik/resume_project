This is a project with automated tests for login via Cypress + JS


**Automated test cases:**


**1. Logs in with correct username and password**

    1.1 Open login page

    1.2 Type `standard_user` into username field

    1.3 Type `secret_sauce` into password field

    1.4 Click Login button

    Expected result: Redirecred to home page, authorised with given user



**2. Logs in with empty username**

    2.1 Open login page

    2.2 Clear username field

    2.3 Type `secret_sauce` into password field

    2.4 Click Login button

    Result: Error is shown "Epic sadface: Username is required"


**3. Logs in with empty password**

    3.1 Open login page

    3.2 Type `standard_user` into username field

    3.3 Clear password field

    3.4 Click Login button

    Result: Error is shown "Epic sadface: Password is required"


**4. Logs in with locked user credentials**

    4.1 Open login page

    4.2 Type `locked_out_user` into username field

    4.3 Type `secret_sauce` into password field

    4.4 Click Login button

    Result: Error is shown "Epic sadface: Sorry, this user has been locked out."

