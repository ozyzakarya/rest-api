require('module-alias/register');
const { response } = require('@helpers');
const { users: User } = require('@models');
const crypt = require('bcrypt');

const userService = {
  /**
   * create user to database
   *
   */
  create: async (req, res) => {
    const { password, username } = req.body;
    let user;

    try {
      user = await User.findOne({
        where: { username: username },
      });
      if (user) {
        return res
          .status(400)
          .json(
            response(
              false,
              'Akun sudah terdaftar. Mohon coba lagi dengan username lain.',
            ),
          );
      } else {
        // second parameter is salt for hash
        const hashPassword = crypt.hashSync(password, 15);
        const hash = crypt.hashSync(new Date().toString() + username, 10);
        const payload = Object.assign(
          {},
          {
            username,
            password: hashPassword,
            hash,
          },
        );
        user = await User.create(payload);
        return res
          .status(201)
          .json(response(true, 'User has been registered successfully', user));
      }
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = userService;
