const Admin = require('../mongoose/models/admin')

const login = async ctx => {
  const req = ctx.request;
  let body = req.body
  await Admin.find({ username: body.username, password: body.password }, (err, doc) => {
    if (err) return console.log('查询语法错误')
    if (doc.length === 0) {
      console.log('查询失败')
      ctx.response.type = 'json'
      ctx.response.body = {
        status: 203,
        result: null,
        msg: '登录密码错误'
      }
    } else {
      console.log('查询成功')
      ctx.response.type = 'json'
      ctx.response.body = {
        status: 200,
        msg: "登陆成功",
        result: {
          token: "18126862987"
        }
      }
    }
  })
}

module.exports = login