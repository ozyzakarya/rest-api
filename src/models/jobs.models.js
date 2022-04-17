'use strict';
module.exports = (sequelize, DataTypes) => {
  const jobs = sequelize.define(
    'jobs',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      url: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      company: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      company_url: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      location: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      title: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      how_to_apply: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      company_logo: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {},
  );
  jobs.associate = function (models) {
    // associations can be defined here
  };
  return jobs;
};
