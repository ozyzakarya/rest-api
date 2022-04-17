require('module-alias/register');
const { response } = require('@helpers');
const { jobs: Job } = require('@models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const jobService = {
  find: async (req, res) => {
    const search = {};
    if (req.query.description) {
      search.description = { [Op.like]: `%${req.query.description}%` };
    }
    if (req.query.location) {
      search.location = { [Op.like]: `%${req.query.location}%` };
    }
    if (
      (req.query.full_time === true && req.query.full_time) ||
      req.query.full_time === 'true'
    ) {
      search.type = { [Op.like]: `Full Time` };
    }
    if (req.query.full_time === 'false' || req.query.full_time === false) {
      search.type = { [Op.notLike]: `Full Time` };
    }
    if (req.query.limit === undefined) {
      req.query.limit = 10;
    }
    try {
      const job = await Job.findAll({
        where: search,
        limit: req.query.limit,
        offset: req.query.limit * (req.query.page - 1) || 0,
      });
      const totalData = await Job.count();
      return res
        .status(200)
        .json(
          response(
            true,
            'Job retrieved successfully',
            job,
            req.query.limit || 10,
            req.query.page || 1,
            totalData,
          ),
        );
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },

  get: async (req, res) => {
    const jobsId = req.params.id;
    try {
      const job = await Job.findOne({ where: { id: jobsId } });
      if (job === null) {
        return res
          .status(400)
          .json(response(false, `Jobs with id ${jobsId} not found`));
      }
      return res
        .status(200)
        .json(response(true, 'Job retrieved successfully', job, null));
    } catch (error) {
      if (error.errors) {
        return res.status(400).json(response(false, error.errors));
      }
      return res.status(400).json(response(false, error.message));
    }
  },
};

module.exports = jobService;
