const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
       name: {
              type: String,
              required: true
       },
       imgUrl: {
              type: String,
              required: true
       },
}, {
       timestamps: true
})

module.exports = mongoose.model('Card', cardSchema);