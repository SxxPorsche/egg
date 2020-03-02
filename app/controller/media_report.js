'use strict';

const Controller = require('egg').Controller;

class ReportController extends Controller {
  async create() {
    const { ctx, service } = this;
    const report =  await service.mediaReport.addToList(ctx.request.body);
    await service.mediaReport.create(ctx.request.body, report);
    ctx.returnBody(200, '创建成功');
  }

  async image() {
    const { ctx, service } = this;
    const file = ctx.request.files[0];
    const url = await service.mediaReport.image(file);
    ctx.returnBody(200, '创建成功', {
      url,
    });
  }

  async getList() {
    const { ctx, service } = this;
    const list = await service.mediaReport.getList();
    ctx.returnBody(200, '获取成功', {
      list,
    });
  }

  async build() {
    const { ctx, service } = this;
    const list = await service.mediaReport.build();
    ctx.returnBody(200, '发布成功', {
      list,
    });
  }

  async getDetails() {
    const { ctx, service } = this;
    const details = await service.mediaReport.getDetails(ctx.query);
    ctx.returnBody(200, '发布成功', {
      details,
    });
  }
}

module.exports = ReportController;
