require('module-alias/register');
const { response } = require('@helpers');
const { accessTokenService } = require('@services');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');

router.post(
  '/',
  [
    body('username').exists().withMessage('username cannot be empty'),
    body('password'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(response(false, errors.array()));
    }
    accessTokenService.create(req, res);
  },
);

module.exports = router;
