const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/data'

mongoose.connect(url)

mongoose.connection.on('connected', () => {
  console.log('数据库已经连接至：' + url)
})

mongoose.connection.on('error', (err) => {
  console.log('连接失败：' + err)
})

mongoose.connection.on('disconnected',() => {
  console.log('数据库已断开连接')
})

module.exports = mongoose