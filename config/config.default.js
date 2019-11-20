/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  
  config.assets = {
    publicPath: '/public/',
  }
  // 修改请求body大小 防止 403 Payload Too Large
  config.bodyParser = {
    jsonLimit: '5mb',
    formLimit: '6mb',
  }

  // mysql config
  config.dbConfig = {
    database: process.env.DB_DATABASE || 'test',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539345035025_4828';

  // add your config here
  config.middleware = ['errorHandler', 'notfoundHandler']

  // sequelize数据库配置
  config.sequelize = {
    dialect: 'mysql',
    database: config.dbConfig.database,
    host: config.dbConfig.host,
    port: config.dbConfig.port,
    username: config.dbConfig.username,
    password: config.dbConfig.password,
    charset: config.dbConfig.charset,
    collate: config.dbConfig.collate
  }

  // jwt 配置
  config.jwt = {
    secret: 'zzestlgcjwtsecret',
    getToken(ctx) {
      if (
        ctx.headers.authorization &&
        (ctx.headers.authorization.split(' ')[0] === 'Bearer' ||
          ctx.headers.authorization.split(' ')[0] === 'Token')
      ) {
        return ctx.headers.authorization.split(' ')[1]
      } else if (ctx.query && ctx.query.token) {
        return ctx.query.token
      }
      return null
    }
  }

  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS'
  }

  // CSRF 关闭
  config.security = {
    csrf: {
      enable: false
    },
    'nosniff': {
      enable: false
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
