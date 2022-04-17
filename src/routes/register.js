require('module-alias/register');
const { response } = require('@helpers');
const { userService } = require('@services');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

router.post(
  '/',
  [
    body('username', 'Username should be present')
      .matches(/^[A-Za-z\s]+$/i)
      .withMessage('Username can only contain char and space')
      .exists()
      .isLength({
        min: 4,
      })
      .withMessage('Username must be at least 4 chars long'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(response(false, errors.array()));
    }
    userService.create(req, res);
  },
);

module.exports = router;
