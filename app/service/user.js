const Service = require('egg').Service;

class UserServices extends Service {
  async login(data) {
    const { userName, password } = data;
    const user = this.ctx.model.User.findOne({ userName });
    //
    // if (!user) {
    //   return null;
    // }

    return user;
  }

  async getUser(data) {
    const { userName, password } = data;
    const user = this.ctx.model.User.findOne({ userName: 'admin' });

    if (!user) {
      return null;
    }

    return user.password === password ? user : null;
  }
}

module.exports = UserServices;
