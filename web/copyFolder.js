const fs = require('fs')
const path = require('path')

/**
 * 复制文件夹
 * @param {*} src 
 * @param {*} dist 
 */
const copyDir = function (src, dest) {
  fs.mkdirSync(dest)
  const files = fs.readdirSync(src)
  for (let i = 0; i < files.length; i++) {
    const current = fs.lstatSync(path.join(src, files[i]))
    if (current.isDirectory()) {
      copyDir(path.join(src, files[i]), path.join(dest, files[i]))
    } else if (current.isSymbolicLink()) {
      const symlink = fs.readlinkSync(path.join(src, files[i]))
      fs.symlinkSync(symlink, path.join(dest, files[i]))
    } else {
      const oldFile = fs.createReadStream(path.join(src, files[i]))
      const newFile = fs.createWriteStream(path.join(dest, files[i]))
      oldFile.pipe(newFile)
    }
  }
}

/**
 * 删除文件夹下所有文件
 * @param {String} path 需要删除的文件夹
 */
function delDir(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach((file, index) => {
      let curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) {
        delDir(curPath); //递归删除文件夹
      } else {
        fs.unlinkSync(curPath); //删除文件
      }
    });
    fs.rmdirSync(path);
  }
}


const publicFolder = path.resolve('../app/public')
delDir(publicFolder)
copyDir(path.resolve('dist'), publicFolder)
