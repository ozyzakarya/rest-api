module.exports = {
  host: 'localhost',
  port: 9001,
  authentication: {
    secret: 'sup3rs3cr3t',
    strategies: ['jwt', 'local'],
    path: '/authentication',
    service: 'users',
    jwt: {
      header: {
        typ: 'access',
      },
      expiresIn: '1d',
    },
    local: {
      entity: 'users',
      usernameField: 'username',
      passwordField: 'password',
    },
  },
};
