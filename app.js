'use strict';

class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async didLoad() {
    // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
  }

  async willReady() {
    // const { app } = this;
    // const db = app.mongooseDB.get('egg');
    // reportList.forEach(async (item) => {
    //   await app.model.MediaReport.create(item);
    // });
    // db.once('open', () => {
    //   console.log('数据库连接成功');
    // });
  }
}

module.exports = AppBootHook;
