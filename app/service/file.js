'use strict';
const Service = require('egg').Service;
const path = require('path');
const fse = require('fs-extra');

const FILE_DIR = path.resolve(__dirname, '../..', 'files');

class FileServices extends Service {
  async upload(data) {
    const { hash, chunks, filename } = data;
    const fileDir = path.resolve(FILE_DIR, path.extname(filename));
    return new Promise(async resolve => {
      if (!fse.existsSync(fileDir)) {
        await fse.mkdirs(fileDir);
      } else {
        const files = await fse.readdir(fileDir);
        files.forEach(file => {
          const filePath = `${fileDir}/${file}`;
          fse.unlinkSync(filePath);
        });
      }

      await fse.move(chunks.filepath, `${fileDir}/${hash}`);
      resolve('切片上传成功');
    });
  }

  pipeStream(path, writeStream) {
    return new Promise(resolve => {
      const readStream = fse.createReadStream(path);
      readStream.on('end', () => {
        fse.unlinkSync(path);
        resolve();
      });
      readStream.pipe(writeStream);
    });
  }

  async merge(data) {
    return new Promise(async resolve => {
      const { filename, size } = data;
      const mergeFile = path.resolve(FILE_DIR, filename);
      const filePath = path.resolve(FILE_DIR, path.extname(filename));
      const chunkPaths = await fse.readdir(filePath);
      // 根据切片下标进行排序，否则直接读取目录的获得的顺序可能会错乱
      chunkPaths.sort((a, b) => a.split('-')[1] - b.split('-')[1]);
      await Promise.all(
        chunkPaths.map((chunkPath, index) =>
          this.pipeStream(
            path.resolve(filePath, chunkPath),
            fse.createWriteStream(mergeFile, {
              start: index * size,
              end: (index + 1) * size,
            })
          )
        )
      );
      await fse.rmdirSync(filePath); // 合并后删除保存切片的目录
      resolve('合并成功');
    });
  }
}

module.exports = FileServices;
