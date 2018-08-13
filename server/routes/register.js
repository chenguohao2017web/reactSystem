const Admin = require('../mongoose/models/admin')

const register = async (ctx) => {
  const req = ctx.request
  let body = req.body
  await Admin.find({ username: body.username }, (err, doc) => {
    if (!err) {
      if (doc.length === 0) {
        ctx.response.type = 'json'
        ctx.body = {
          status: 200,
          result: null,
          msg: '注册成功'
        }
        // 证明可以注册
        Admin.create({
          username: body.username,
          password: body.password
        }, (err, doc) => {
          if (!err) {
            console.log('注册成功')
          }
        })
      } else if (doc.length > 0) {
        ctx.response.type = 'json'
        ctx.body = {
          status: 205,
          result: null,
          msg: '该用户已注册'
        }
      }
    }
  })

}


module.exports = register