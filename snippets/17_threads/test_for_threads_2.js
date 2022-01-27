const crypto = require('crypto')

const start = Date.now();
const hash = (id)=>{
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log(`Hash ${id} time(milli seconds): `,Date.now()-start)
    })
}

// hash 1
hash(1) // 530

// // hash 2 
// hash(2) // 1051

// // hash 3
// hash(3) // 1053

