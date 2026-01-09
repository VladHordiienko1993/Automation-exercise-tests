# 🧪 Automation Exercise Tests

Automated testing suite for [automationexercise.com](https://automationexercise.com) using Playwright and Postman

## 📊 CI/CD Status

![Playwright Tests](https://github.com/VladHordiienko1993/Automation-exercise-tests/actions/workflows/playwright.yml/badge.svg)
![Postman API Tests](https://github.com/VladHordiienko1993/Automation-exercise-tests/actions/workflows/postman.yml/badge.svg)

## 📖 About

Comprehensive test automation project covering UI and API testing with CI/CD integration.

**Technologies:** Playwright v1.49.1 | Node.js v20+ | Postman/Newman | GitHub Actions | Page Object Model

## 🚀 Quick Start
```bash
# Clone and install
git clone https://github.com/VladHordiienko1993/Automation-exercise-tests.git
cd Automation-exercise-tests
npm install
npx playwright install

# Run UI tests
npx playwright test

# Run API tests (requires Newman)
npm install -g newman
newman run postman/Automation_Exercise_API.postman_collection.json
```

## 📦 Test Coverage

### UI Tests (Playwright)
- **TC_001-004:** User authentication (register, login, negative cases)
- **TC_005-007:** Product functionality (list, details, search)

### API Tests (Postman)
- Products (list, search)
- Authentication (valid/invalid login)
- User Management (create, delete, get details)
- Brands (list)

Full test documentation: `TestCases/` folder

## 🐛 Known Issues

- **BUG_001:** Email validation URL inconsistency - [Details](Bugs/BUG_001.md)
- **BUG_002:** Search returns irrelevant products - [Details](Bugs/BUG_002.md)

## 📁 Project Structure

Organized with Page Object Model pattern, structured test data, and comprehensive API collection with documentation.

**Base URL:** https://automationexercise.com