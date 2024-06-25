const path = require('node:path')

//barras separadoras de carpetas según SO
console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('temp/midu-secret-files/passsword.txt')
console.log(base)

const fileName = path.basename('temp/midu-secret-files/passsword.txt', '.txt')
console.log(fileName)

const extension = path.extname('my.super.image.jpg')
console.log(extension)