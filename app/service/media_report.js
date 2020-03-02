'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const dayjs = require('dayjs');
const shelljs = require('shelljs');

class ReportServices extends Service {
  create(data, report) {
    const { content } = data;
    return new Promise((resolve, reject) => {
      fs.readFile('../lizard/template/media-report.html', 'utf-8', (err, fileData) => {
        const reg = new RegExp('%REPORT_DETAIL_TEMPLATE%');
        fs.writeFile(
          `../lizard/report-details/${report._id}.html`,
          fileData.replace(reg.exec(fileData)[0], content),
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });
    });
  }

  addToList(data) {
    const { title, description, date, cover, content  } = data;
    return new Promise(async (resolve, reject) => {
      const item  = await this.ctx.model.MediaReport.create({
        img: cover,
        title,
        time: dayjs(date).format('YYYY-MM-DD'),
        text: description,
        content,
      });
      resolve(item);
    });
  }

  getList() {
    return new Promise(async (resolve, reject) => {
      const list = await this.ctx.model.MediaReport.find({});
      resolve(list);
    });
  }

  getDetails(query) {
    const { reportId } = query;
    return new Promise(async (resolve, reject) => {
      const details = await this.ctx.model.MediaReport.findOne({ _id: reportId });
      resolve(details);
    });
  }

  image(file) {
    const today = dayjs().format('YYYY-MM-DD');
    return new Promise((resolve, reject) => {
      fs.readFile(file.filepath, (error, buffer) => {
        if (error) {
          reject(error);
        } else {
          fs.writeFile(`../lizard/src/img/media-report/${today}/${file.filename}`, buffer, (err) => {
            if (err) {
              reject(err)
            } else {
              resolve(`/img/media-report/${today}/${file.filename}`);
            }
          });
        }
      });
    });
  }

  build() {
    return new Promise((resolve) => {
      shelljs.exec('cd ../lizard && npm run build:dev');
      resolve();
    });
  }
}

module.exports = ReportServices;
