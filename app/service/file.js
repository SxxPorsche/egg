'use strict';
const Service = require('egg').Service;
const path = require('path');
const fse = require('fs-extra');

const FILE_DIR = path.resolve(__dirname, '..', 'files');

class FileServices extends Service {
  async upload(data) {
    const { hash, chunks, filename } = data;
    const chunkDir = path.resolve(FILE_DIR, filename);
    return new Promise(async resolve => {
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir);
      }

      await fse.move(chunks.filepath, `${chunkDir}/${hash}`);
      resolve('切片上传成功');
    });
  }

  async merge(filename) {
    const chunkDir = path.resolve(FILE_DIR, filename);
    const chunkPaths = await fse.readdir(chunkDir);


    return new Promise(resolve => {
      resolve(process.cwd());
    });
  }
}

module.exports = FileServices;
