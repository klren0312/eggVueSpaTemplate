'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },

  // Sequelize插件
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 校验插件
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  // jwt插件
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },

  // 子路由
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },

  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },

};
