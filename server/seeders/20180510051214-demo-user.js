
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        fullname: 'John',
        username: 'Doe',
        password: 'ant',
        email: 'demo@demo.com',
        createdAt: 	null,
        updatedAt: null
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', {});
  }
};
