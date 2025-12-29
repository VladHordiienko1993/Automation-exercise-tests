ID: TC_001
Title: Register New User with Valid Data (E2E)

Priority: High
Severity: Blocker

Preconditions:
* User not logged in
* Test email not registered yet

Test Data:
* Name: Vlad Test
* Email: vladtest1233210@test.com
* Password: Test123!
* Title: Mr
* Date of Birth: 1/1/1995
* First Name: Vlad
* Last Name: Tester
* Company: Test Company
* Address: 123 Test Street
* Country: India
* State: Maharashtra
* City: Mumbai
* Zipcode: 400001
* Mobile: +353123456789

Steps:
1. Navigate to '/'
2. Click "Signup / Login" button
3. Enter name and email
4. Click "Signup" button
5. Fill account information (title, password, DOB)
6. Check newsletter checkbox
7. Check offers checkbox
8. Fill address information (all fields)
9. Click "Create Account" button
10. Click "Continue" button
11. Click "Delete Account" button

Expected Result:
1. Home page loads (logo visible)
2. Signup form accessible
3. Account creation form loads (URL '/signup')
4. "ACCOUNT CREATED!" message (URL '/account_created')
5. User logged in (username in header) (URL '/')
6. "ACCOUNT DELETED!" message (URL '/delete_account')

Actual Result:
As expected

Post-conditions:	
* User account deleted from system
* Test email available for reuse

Status: Passed 