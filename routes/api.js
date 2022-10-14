/** 
* 我也不知道为什么，前端有一个 /api 的 GET 请求报错，很碍眼。后端写一个 /api 接口给它调调吧~
*/
const router = require('koa-router')()

router.get('/', async (ctx) => {
  ctx.body = {
    code: 200,
    data: "这是什么请求？为什么会有这个请求啊？",
    message: '请求成功',
  };
})

module.exports = router