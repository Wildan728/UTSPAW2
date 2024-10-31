var express = require('express');
var router = express.Router();

const PariwisataController = require("../controller/wildan");
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', PariwisataController.createdPariwisata);

module.exports = router;

//link repo
//https://github.com/Wildan728/UTSPAW2.git