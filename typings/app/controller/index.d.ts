// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFile = require('../../../app/controller/file');
import ExportHome = require('../../../app/controller/home');
import ExportMediaReport = require('../../../app/controller/media_report');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    file: ExportFile;
    home: ExportHome;
    mediaReport: ExportMediaReport;
    user: ExportUser;
  }
}
