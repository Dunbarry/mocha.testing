const express = require('express');

const router = express.Router();
router.post('/:math', function(req, res, next){
  if(!req.body.num1&&!req.body.num2){
    return res.status(432).json({message: 'no data fool'});
  }
  next();
})

  router.post('/add', function(req, res, next){
    res.json({result: req.body.num1+req.body.num2});
})
module.exports=router;
