const crypto = require('crypto')

const start = Date.now();
const hash = (id)=>{
    crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
        console.log(`Hash ${id} time(milli seconds): `,Date.now()-start)
    })
}

// hash 1
hash(1) // 530

// if hash 1 elapsed time is n milliseconds then for hash 2
// it should be 2n if there is no multithreading 
// it should be close to n if architecture supports 2 threads per core

// hash 2 
hash(2) // 533

// for hash 3 it should be close to 2n if architecture supports 2 threads per core 
// Note that if there are 2 thread support in a core then uncommenting the below code
// would also increases elapsed time of hash 2 
// WHY?
hash(3)

