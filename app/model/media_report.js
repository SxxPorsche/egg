'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const db = app.mongooseDB.get('dodo');

  const ReportSchema = new Schema({
    cover: { type: String },
    title: { type: String },
    date: { type: String },
    description: { type: String },
    content: { type: String },
  });

  return db.model('MediaReport', ReportSchema);
};
