

module.exports = (sequelize, DataTypes) => {
  let Order = sequelize.define('Order', {
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User);
    Order.belongsTo(models.Meal);
  };
  return Order;
};
