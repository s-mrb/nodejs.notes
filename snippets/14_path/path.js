const path = require('path')

const code_file_path = '/media/xyz/6EFA87B4FA8776DD/Local_repo/Resume_Rev/RB-Nodejs/14_path/path.js'

console.log(path.dirname(code_file_path))
console.log(path.basename(code_file_path))
console.log(path.extname(code_file_path))

console.log(path.basename(code_file_path,path.extname(code_file_path)))


// give full path of file
console.log(path.resolve('./path.js'))