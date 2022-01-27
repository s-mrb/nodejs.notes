const fs = require('fs')

const folder_path =
  '/media/xyz/6EFA87B4FA8776DD/Local_repo/Resume_Rev/RB-Nodejs/16_folders'

// files, directory and non-directory both
// Do not go deep in each folder 
const files_in_current_folder = fs.readdirSync(folder_path)
console.log(files_in_current_folder)


