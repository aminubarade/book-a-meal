'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        type:Sequelize.STRING,
        allowNull: false
      },
      price:{
        type:Sequelize.DECIMAL,
        allowNull: false
      },
      description:{
        type:Sequelize.STRING,
        allowNull: false
      },
      userId:{
        type:Sequelize.INTEGER,
        foreignKey:true,
        references:{
          model:'Users',
          key:'id'
        },
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Meals');
  }
};