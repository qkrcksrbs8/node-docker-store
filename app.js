const express = require('express'); // npm i express
const router = express();
// api npm // npm i axios

const bodyParser = require("body-parser"); // npm i body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const store = require('./src/router/storeRouter');

router.use('/user', store);

//포트 연결
router.listen(9002,()=>console.log(`http://localhost:9002`));