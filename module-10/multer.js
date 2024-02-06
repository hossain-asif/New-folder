const express=require('express');
const app=express();
const multer=require('multer');
const path=require('path');
const port=5500;

const folder="./uploads/";
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,folder);
    },
    filename:(req,file,cb)=>{
        const fileExt=path.extname(file.originalname);
        const fileName=file.originalname.replace(fileExt,"").toLowerCase();
        console.log(fileExt);
        console.log(fileName)
        cb(null,fileName+fileExt);
    },
});


var upload=multer({
    storage:storage,
  
})

app.post('/',upload.single('asif'),(req,res)=>{
    res.send('File uploader successfully');
})

app.listen(port,(err)=>{
    console.log('Listening on port 5500');
})