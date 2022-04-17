require('module-alias/register');
const { response } = require('@helpers');
const { jobService } = require('@services');
const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator/check');

router.get('/', (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(response(false, errors.array()));
  }
  jobService.find(req, res);
});

router.get('/:id', (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json(response(false, errors.array()));
  }
  jobService.get(req, res);
});

module.exports = router;
