'use strict';
const crypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const date = new Date();
    return queryInterface.bulkInsert('jobs', [
      {
        type: 'Full Time',
        url: 'https://jobs.github.com/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb',
        company: 'SweetRush',
        company_url: 'https://www.sweetrush.com/',
        location: 'Remote',
        title: 'Senior Creative Front End Web Developer',
        description:
          'SweetRush has an exciting opportunity for an experienced creative front-end developer (full stack is also acceptable) with an eye for graphic and UX design!',

        how_to_apply:
          '<p>If this describes your interests and experience, please submit your current resume and salary requirements through the following',
        company_logo: 'https://jobs.github.com.png',
        createdAt: date,
        updatedAt: date,
      },
      {
        type: 'Full Time',
        url: 'https://jobs.github.com/positions/7638eee4-4e75-4c06-a920-ea7619a311b5',
        company: 'MANDARIN MEDIEN Gesellschaft für digitale Lösungen mbH',
        company_url: 'https://www.sweetrush.com/',
        location: 'Schwerin',
        title: 'Systemadministrator:in',
        description:
          '2002 sind wir als Internetagentur gestartet. Heute bezeichnen wir uns als Digitalagentur.',

        how_to_apply: '<p>If this describes your interests and experience, ',
        company_logo: 'https://jobs.github.com/rails/active_storage.jpeg',
        createdAt: date,
        updatedAt: date,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
