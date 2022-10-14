const router = require('koa-router')()
const query = require('../utils/query.js') // 调数据库
const { tokenCheck } = require('../utils/token') // 验证 Token
const utils = require('../utils/utils') // 返回给客户端
const log = require('../utils/log4js') // 手动打印日志

router.prefix('/chart')

/**
* @author mygoes mynameiszhayu@163.com
* @description 查询图标数据-封装了 tokenCheck 做 Token 验证，验证通过再 query 请求
*/
router.get('/get', async (ctx) => {
  await tokenCheck(ctx).then(async res => {
    try {
      let result = await query('select * from chart')
      /*   
      ctx.body = {
        code: 200,
        data: result,
        message: '请求成功',
      }; 
      可以简化成以下写法：
      */
      ctx.body = utils.success(result)
    } catch (error) {
      ctx.body = utils.fail(`信息查询异常:${error}`,utils.CODE.InternalServerError)
      log.error(error)
    }
  }).catch(error => {
    console.log('error接口报错',error);
    ctx.body = error
  })
})
/* 
// 不需要 Token 验证时这样写即可：
router.get('/get', async (ctx) => {
  try {
    const result = await query('select * from chart')
    ctx.body = {
      code: 200,
      data: result,
      message: '请求成功',
    };
  } catch (error) {
    ctx.body = utils.fail(error)
  }
}) 
*/
module.exports = router