const Card = require('../models/dbCard');

const getCards = async (req, res) => {
       const data = await Card.find();
       if(data){
              res.status(200);
              res.json({status: true, message:"Cards retrieved", data})
       }else{
              res.status(404);
              res.json({status: false, message: "No cards found"});
       }
}

const postCard = (req, res) => {
       if(req.body.name && req.body.imgUrl){
              Card.create({
                     name: req.body.name,
                     imgUrl: req.body.imgUrl
              }, (err, data) => err ? res.status(500).json({status:false, message:err}) : res.status(201).json({status: true, message: "Posted", data}))
       }else{
              res.status(400);
              res.json({status: false, message:"Enter name and image url"});
       }
}

module.exports = {
       getCards,
       postCard
}