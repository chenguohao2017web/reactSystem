const mongoose = require('../../mongoose')

//  用户表
const AdminSchema = new mongoose.Schema({
  name: String,
  price: String
})
module.exports = mongoose.model('foods', AdminSchema)