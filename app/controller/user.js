'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const { userName, password } = ctx.request.body;
    const response = await service.user.login({
      userName,
      password,
    });
    if (response) {
      ctx.returnBody(200, '登录成功', {
        response
      });
    } else {
      ctx.throw(400, '用户名或密码错误');
    }
  }

  async getUser() {
    const { ctx, service } = this;
    const { userName } = ctx.query;
    ctx.body = await service.user.getUser({
      userName,
    });
  }
}

module.exports = UserController;
