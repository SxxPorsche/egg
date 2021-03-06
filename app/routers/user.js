'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.user.login);
  router.get('/user', controller.user.getUser)
};
