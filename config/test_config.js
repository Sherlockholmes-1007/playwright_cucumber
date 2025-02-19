const configs = {
    test: {
      baseURL: 'https://testing.maxistime.com',
      username: 'timon@mailsac.com',
      password: 'Test@123',
    },
    prod: {
      baseURL: 'https://maxistime.com',
      username: 'produser@example.com',
      password: 'Prod@123',
    },
  };
const env = process.env.ENV || 'test';
  
module.exports = configs[env];
  