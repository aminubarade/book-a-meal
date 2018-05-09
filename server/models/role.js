'use strict';
module.exports = (sequelize, DataTypes) => {
  var Role = sequelize.define('Role', {}, {});
  Role.associate = function(models) {
    // associations can be defined here
  };
  return Role;
};