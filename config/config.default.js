/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  return {
    keys: appInfo.name + '_1581651704320_6952',
    multipart: {
      mode: 'file',
      fileExtensions: [
        '',
      ],
    },
    mongoose: {
      clients: {
        dodo: {
          url: 'mongodb://127.0.0.1/dodo',
          options: {
            // user: 'test', // 数据库账号
            // pass: 'test'  // 数据库密码
          },
        }
      }
    },
    security: {
      csrf: {
        enable: false, // 前后端分离，post请求不方便携带_csrf
        ignoreJSON: true
      },
      domainWhiteList: ['http://localhost:3000'], //配置白名单
    },
    cors: {
      credentials: true,
      allMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    },
    user: {
      "userName": "admin",
      "password": "admin",
      "isMaster": true
    },
    session: {
      maxAge: 3600 * 1000,
    },
  };
};
