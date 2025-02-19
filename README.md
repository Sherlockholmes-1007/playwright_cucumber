# 🏆 Playwright + Cucumber Automation Framework

This is a **Playwright + Cucumber** test automation framework that supports multiple environments (`test`, `prod`) without using `.env` files. It follows the **Page Object Model (POM)** for better maintainability.

---

## 🚀 **Features**
- ✅ **Playwright + Cucumber Integration**
- ✅ **Environment-Specific Configurations** via `test_config.js`
- ✅ **Page Object Model (POM)**
- ✅ **Parallel Execution Support**
- ✅ **HTML Reports with Cucumber**

---

## ⚙️ **Setup & Installation**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/playwright-cucumber-framework.git
cd playwright-cucumber-framework
```

```sh
npm install
```

## Run Tests for Test Environment
```
npx cucumber-js --env=test
```

## Run Tests for Production Environment
```
npx cucumber-js --env=prod
```

## Run Tests in Headless Mode
```
npx cucumber-js --env=test -- --headless
```
