ID: TC_004

Title: Login user with wrong password

Priority: High
Severity: Critical

Preconditions:
* User registered
* User not logged in

Test data:
* Email: vladTest1@gmail.com (correct)
* Password: WrongPass123 (incorrect)

Steps: 
1. Navigate to “/login”
2. Enter email in “Email Address” field (vladTest1@gmail.com)
3. Enter wrong password in “Password” field (WrongPass123)
4. Click “Login” button

Expected result:
1. Error message displayed: "Your email or password is incorrect!"
2. Login unsuccessful
3. User remains on '/login' page 
4. Login form still accessible for retry

Actual result:
As expected

Post-conditions: 


Status: Passed