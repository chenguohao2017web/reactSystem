const Koa = require('koa')
const Router = require('koa-route')
const app = new Koa()
const cors = require('koa-cors')
const Bodyparser = require('koa-bodyparser')
const Login = require('./routes/login')
const Register = require('./routes/register')
app.use(Bodyparser())
app.use(cors())

// 接口
app.use(Router.post('/system/login', Login))
app.use(Router.post('/system/register', Register))

// 监听
app.listen(3001, () => {
  console.log('server is start in 3001')
})


