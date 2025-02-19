const selectors = require('../selectors/login_elements');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.selectors = selectors.loginPage;
  }

  async navigate(baseURL) {
    await this.page.goto(baseURL);
  }

  async login(username, password) {
    await this.page.fill(this.selectors.usernameInput, username);
    await this.page.fill(this.selectors.passwordInput, password);
    await this.page.click(this.selectors.loginButton);
  }
}

module.exports = LoginPage;