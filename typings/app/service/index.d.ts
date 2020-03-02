// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFile = require('../../../app/service/file');
import ExportMediaReport = require('../../../app/service/media_report');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    file: ExportFile;
    mediaReport: ExportMediaReport;
    user: ExportUser;
  }
}
