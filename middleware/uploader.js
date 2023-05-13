const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '././uploads/')
    },
    filename: function (req, file, cb) {
      console.log("limit",Number(file.size)/(1024*1024));  
      const uniqueSuffix =  new Date().toDateString() + '-' + file.originalname; 
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage, limits : 1024 * 1024 }).single('file');


module.exports = upload;