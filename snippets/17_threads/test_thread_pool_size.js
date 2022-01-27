const crypto = require('crypto')

const start = Date.now();
const hash = (id)=>{
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log(`Hash ${id} time (milli seconds): `, Date.now()-start)
    })
}

hash(1)  // 1068
hash(2)  // 1068
hash(3)  // 1068
hash(4)  // 1069
hash(4)  // ~1592 and sometimes ~2922

