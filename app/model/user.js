'use strict';

module.exports = app => {
  const { STRING, ENUM, DATE, NOW } = app.Sequelize;

  const User = app.model.define('user', {
    username: {
      type: STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){1,50}$/i,
        isLowercase: true,
      },
    },
    password: {
      type: STRING(32),
      allowNull: true,
    },
    sex: {
      type: ENUM,
      values: [ 'M', 'F' ],
      allowNull: true,
    },
    created_at: {
      type: DATE,
      field: 'created_at',
      allowNull: false,
      defaultValue: NOW,
    },
    updated_at: {
      type: DATE,
      field: 'updated_at',
      allowNull: false,
      defaultValue: NOW,
    },
  }, {
    timestamps: false,
    tableName: 'user',
    underscored: false,
  });

  return User;
};
