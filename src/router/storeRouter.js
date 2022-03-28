'use strict';
const express = require('express'); // npm i express
const router = express();
router.get('/', (req, res) => {
    console.log(req.originalUrl,);
    // let result = userLogin(req);
    // if (!result.code.startsWith('S')) return res.json({'code':'P0001', 'message': '계정 정보를 확인해주세요.'});
    let result = {data:{"name":"찬찬몬"}}
    return res.json({'code':'S0001', 'message': '정상 처리되었습니다.', 'data': result.data});
})

module.exports = router;