// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMediaReport = require('../../../app/model/media_report');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    MediaReport: ReturnType<typeof ExportMediaReport>;
    User: ReturnType<typeof ExportUser>;
  }
}
