'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const userRouter = require('./routers/user');
const reportRouter = require('./routers/media_report');
const fileRouter = require('./routers/file');

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  userRouter(app);
  reportRouter(app);
  fileRouter(app);
};
