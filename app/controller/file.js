'use strict';

const Controller = require('egg').Controller;

class FileController extends Controller {
  async upload() {
    const { ctx, service } = this;
    const { hash, filename } = ctx.request.body;
    const chunks = ctx.request.files[0];
    const response = await service.file.upload({
      hash,
      chunks,
      filename,
    });
    ctx.returnBody(200, '上传成功', {
      response,
    });
  }

  async merge() {
    const { ctx, service } = this;
    const { filename, size } = ctx.request.body;
    const response = await service.file.merge({
      filename,
      size,
    });
    ctx.returnBody(200, '上传成功', {
      response,
    });
  }
}

module.exports = FileController;
