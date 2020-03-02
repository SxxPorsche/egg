'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/media-report/list', controller.mediaReport.getList);
  router.post('/media-report/create', controller.mediaReport.create);
  router.post('/media-report/image', controller.mediaReport.image);
  router.post('/media-report/build', controller.mediaReport.build);
  router.get('/media-report/report-details', controller.mediaReport.getDetails)
};
