/**
 * Created by tammyrobinson on 3/22/17.
 */
// dependencies
var express = require('express');
var router  = express.Router();

var multer  = require('multer');
var path    = require('path');
var fs      = require('fs');

// multer storage setup
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        var path = './tmp'; // Make sure this path exists
        if(!fs.existsSync(path))
            fs.mkdirSync(path);
        cb(null, path);
    },
    filename   : function (req, file, cb) {
        // var ext  = path.extname(file.originalname);
        // var name = file.fieldname + '-' + Date.now() + ext;
        cb(null, file.originalname);
    }
});

var upload = multer({
    storage: storage
}).any('file');

router.post('/', function (req, res) {

    // error handling for multer upload
    upload(req, res, function (err) {
        if(err)
            return res.send(err);

        var file = req.files[0].originalname;

        console.log('successful upload: ' + file);
        res.send('Success');
    });
});

module.exports = router;

