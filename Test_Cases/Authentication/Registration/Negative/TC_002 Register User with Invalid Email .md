ID: TC_002
Title: Registration with Invalid Email
Priority: High
Severity: Medium
Preconditions:
* User not logged in
Test Data: 
* Name: Vlad Test (for all sets)
Set 1 - Missing @:
* Email: vladtest.gmail.com
Set 2 - Space in email:
* Email: vlad test@gmail.com
Set 3 - Incomplete domain:
* Email: vladtest@
Set 4 - Invalid domain:
* Email: vladtest@.com
Set 5 - Email already exists:
* Email: vladTest1@gmail.com (from TC_003)
Set 6 - Empty email:
* Email: "" (empty)

Steps:
1. Navigate to '/login'
2. Enter name in "Name" field
3. Enter invalid email (from Test Data Set)
4. Click "Signup" button

Expected Result:
1. Error message displayed:
   - For invalid format: browser validation OR custom error
   - For existing email: "Email Address already exist!"
2. Signup unsuccessful:
   - URL remains: '/login'
   - "New User Signup!" form still visible
3. Form remains functional for retry

Actual result:
Set 5 - Email already exists: 
- URL changes to '/signup' (current behavior, see BUG_001)
- Error message "Email Address already exist!" visible

Status: Failed (known bug)