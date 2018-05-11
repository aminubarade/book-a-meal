'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meal_orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mealId:{
        type:Sequelize.INTEGER,
        foreignKey:true,
        references: {
          model:'Meals',
          key:'id'
        }
      },
      orderId:{
        type:Sequelize.INTEGER,
        foreignKey:true,
        references: {
          model:'Orders',
          key:'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('meal_orders');
  }
};