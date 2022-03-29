'use strict';
const express = require('express'); // npm i express
const router = express();
router.get('/', (req, res) => {
    console.log(req.originalUrl);
    let result = {data:{"name":"찬찬몬"}}
    return res.json({'code':'S0001', 'message': '정상 처리되었습니다.', 'data': result.data});
})

module.exports = router;