'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {}, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};