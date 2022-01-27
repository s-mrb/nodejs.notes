const fs = require('fs')
const dir = 'folder3'

// fs.rmdir(dir, {recursive:true},(err) => {
//     if (err) {
//         console.log(err)
//     }

//     console.log(`${dir} is deleted!`);
// });

fs.rm(dir, { recursive: true, force: true }, (err) => {
  if (err) {
    throw err
  } else {
    console.log(`${dir} is deleted!`)
  }
})

