'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meal = sequelize.define('Meal', {}, {});
  Meal.associate = function(models) {
    // associations can be defined here
  };
  return Meal;
};