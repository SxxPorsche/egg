const Service = require('egg').Service;
const path = require('path');
const fse = require('fs-extra');

const FILE_DIR = '../images';

class FileServices extends Service {
  async upload(data) {
    const { hash, chunks } = data;
    const chunkDir = path.resolve(FILE_DIR, chunks.filename);
    return new Promise(async (resolve) => {
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir);
      }

      await fse.move(chunks.filepath, `${chunkDir}/${hash}`);
      resolve('切片上传成功');
    });
  }

  async merge(filename) {
    return new Promise((resolve) => {
      resolve(process.cwd());
    });
  }
}

module.exports = FileServices;