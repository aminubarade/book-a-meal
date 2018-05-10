'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('meal_menu', {
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
      menuId:{
        type:Sequelize.INTEGER,
        foreignKey:true,
        references: {
          model:'Menu',
          key:'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('meal_menu');
  }
};