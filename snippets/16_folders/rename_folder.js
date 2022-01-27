// rename folder in asynchronous way
// no need to give full path of the folder
fs.rename('folder1', 'folder_1', err=>{
    if(err){
        console.log(err)
        return
    }
})


// rename folder in a synchronous wau
try{
fs.renameSync('folder2', 'folder_2')
}
catch(e){
console.log(e)
}