

module.exports = (sequelize, DataTypes) => {
  let Menu = sequelize.define('Menu', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Menu.associate = function (models) {
    // associations can be defined here
    Menu.belongsTo(models.User);
    Menu.hasMany(models.Meal, { through: 'meal_menu' });
  };
  return Menu;
};
