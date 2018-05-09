'use strict';
import bcrypt from 'bcrypt-nodejs';

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rolesId: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Meal, {
      foreignKey: 'userId',
      as: 'meal'
    });
  };

  User.prototype.comparePassword = (user, password) =>
    bcrypt.compareSync(password, user.password);

  /**
   * Hook for hashing password before creating a new user
   */
  User.hook('beforeCreate', (user) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  });

  /*User.siginRules = () => ({
    email: 'required|email',
    password: 'required'
  });*/

  return User;
};

export default userModel;
