'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const db = app.mongooseDB.get('egg');

  const UserSchema = new Schema({
    userName: { type: String },
    password: { type: String },
  });

  return db.model('User', UserSchema);
};
