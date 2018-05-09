'use strict';
module.exports = (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {}, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};