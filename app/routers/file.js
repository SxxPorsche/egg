'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/file-api/upload', controller.file.upload);
  router.post('/file-api/merge', controller.file.merge);
};
