'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meal = sequelize.define('Meal', {
    name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    price:{
      type:DataTypes.DECIMAL,
      allowNull: false
    },
    description:{
      type:DataTypes.STRING,
      allowNull: false
    }
    
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
    Meal.belongsTo(models.User);
    Meal.belongsToMany(models.Menu,{through:'meal_menu'});
    Meal.belongsToMany(models.Order,{through:'meal_orders'});
    
  };
  return Meal;
};
