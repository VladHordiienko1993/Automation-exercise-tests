ID: TC_003
Title: Login user with valid data

Priority: High
Severity: Blocker

Preconditions:
* User not logged in
* Permanent test user exists in system (Email: vladTest1@gmail.com, Password: vladTest1)
* Note: Create this user once manually before first test run

Test Data:
* Email: vladTest1@gmail.com
* Password: vladTest1

Steps:
1. Navigate to '/login'
2. Enter email: vladTest1@gmail.com
3. Enter password: vladTest1
4. Click "Login" button
5. Click "Logout" button

Expected Result:
1. Login page loads:
   - URL: '/login'
   - "Login to your account" section visible
2. After login:
   - URL changes to '/'
   - Username in header: "Logged in as Vlad"
   - Logout button visible
   - No error messages
3. After logout:
   - URL changes to '/login'
   - "Login to your account" section visible

Actual Result:
As expected

Post-conditions:
* User logged out
* Test user remains in system (not deleted)
* Available for next test run

Status: Passed

