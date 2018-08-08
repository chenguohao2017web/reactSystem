const mongoose = require('../../mongoose')

//  用户表
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String
})
module.exports = mongoose.model('admins', AdminSchema)

