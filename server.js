const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
// const upload = require('./middleware/uploader');
const multer = require('multer');
const port = 3000 || process.env.PORT;
const app = express();
<<<<<<< HEAD
const config = require('./config')
=======

>>>>>>> origin/main
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded())
app.use(express.static('uploads'));
app.all("/" , (req,res)=>{
    console.log("req body",req.body);
    res.send("Hi Root URL");
})
const storage = multer.diskStorage({
    destination: 'uploads/', // Specify the destination folder for uploaded files
    filename: function (req, file, cb) {
      const name = (new Date().toDateString() + '-' + file.originalname).trim(" ")
      req.filePath = `/${name}`;
      cb(null, name);
    }
  });
  
const upload = multer({
storage: storage,
limits: { fileSize: 1024 * 1024 * 1024} // Set the file size limit (in this example, 1MB)
}).single('file');


app.post('/uploadfile' ,  function (req,res){
    
    upload(req,res,function (err){
        // console.log("req files",req.files,req.filePath);
        if(err instanceof multer.MulterError){
            // console.log("err",err);
            return res.status(400).json({ message: 'File upload failed', error: err.message });
        } else if(err){
            return res.status(500).json({ message: 'Internal Server Error', error: err.message });
        }
        // console.log("req filpath",req.filePath);
<<<<<<< HEAD
        res.status(200).json({message:"File uploaded successfully!",path : `${config.baseUrl}${req.filePath}` });
=======
        res.status(200).json({message:"File uploaded successfully!",path : `http://localhost:3000${req.filePath}` });
>>>>>>> origin/main
    })
})

app.listen(port,()=>console.log(`server running at ${port}`));
