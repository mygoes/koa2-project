const router = require('koa-router')()
const date = require('silly-datetime')
const query = require('../utils/query.js')
const crypto = require('crypto') // 加密
const log4js = require('../utils/log4js')
const utils = require('../utils/utils')
const { tokenCreate } = require('../utils/token')
router.prefix('/login')

/**
* @author mygoes mynameiszhayu@163.com
* @description: 注册
* @param {string} username
* @param {string} phone
* @param {string} email
* @param {string} password
*/
router.post('/signUp', async ctx => {
  const { username, phone, email, password } = ctx.request.body

  // 用户名称校验
  if (username == '') {
    return ctx.body = utils.fail("用户名称不能为空", 400)
  } else if (username.length < 2 || username.length > 16) {
    return ctx.body = utils.fail("用户名称的长度在 2~16 之间", 400)
  }
  // 手机号码（非必填）校验
  if (phone != "") {
    const reg =
      /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!reg.test(phone)) {
      return ctx.body = utils.fail("手机号码格式错误! 请检查后重新输入", 400)
    }
  }
  // 邮箱（非必填）校验
  if (email != "") {
    const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (!reg.test(email)) {
      return ctx.body = utils.fail("邮箱格式错误! 请检查后重新输入", 400)
    }
  }
  // 密码校验
  if (password == '') {
    return ctx.body = utils.fail("密码不能为空", 400)
  } else if (password.length < 4 || password.length > 16) {
    return ctx.body = utils.fail("密码的长度在 4~16 之间", 400)
  }

  try {
    const usernameWhether = await query(`select username from user where username='${username}'`)

    if (usernameWhether.length) {
      return ctx.body = utils.fail("该用户名称已存在", 400)
    }

    /**
     * @description: 加密
     * crypto.createHash('md5') ：通过指定算法创建一个哈希对象
     * update 增加要添加摘要的数据，摘要输出前可以使用多次update
     * digest 输出摘要内容，输出后则不能再添加摘要内容
     */
    const passwordCipher = crypto.createHash('md5').update(password).digest('hex')

    await query(`insert into user (username,password,email,role,state) value ('${username}','${passwordCipher}','${email}','普通用户','1')`)

    ctx.body = utils.success("", "注册成功", 200)
  } catch (error) {
    log4js.error(error.message);
  }
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 登录
* @param {string} username
* @param {string} password
* @return: code 状态码
* @return: message 提示信息
* @return: token 令牌
*/
router.post('/signIn', async ctx => {

  const { username, password } = ctx.request.body;

  // 参数校验
  if (username == '') {
    return ctx.body = utils.fail("用户名称不能为空", 400)
  } else if (username.length < 2 || username.length > 16) {
    return ctx.body = utils.fail("用户名称的长度在 2~16 之间", 400)
  }
  if (password == '') {
    return ctx.body = utils.fail("密码不能为空", 400)
  } else if (password.length < 4 || password.length > 16) {
    return ctx.body = utils.fail("密码的长度在 4~16 之间", 400)
  }

  try {
    const usernameWhether = await query(`select username from user where (username='${username}' and is_delete='0' and state='1')`)

    if (usernameWhether.length == 0) {
      return ctx.body = utils.fail("查无此用户", 400)
    } else {
      const passwordWhether = await query(`select password from user where username='${username}'`)

      const passwordCipher = crypto.createHash('md5').update(password).digest('hex')

      if (passwordCipher == passwordWhether[0].password) {
        const userToken = {
          username: usernameWhether[0].username,
        }
        const token = tokenCreate(userToken)

        const mysql_id = await query(`select id,avatar from user where username='${username}'`)
        const user_id = mysql_id[0].id
        const avatar = mysql_id[0].avatar

        ctx.body = utils.success({ id: user_id, avatar: avatar, token }, '登录成功')

        setLoginHistory(user_id,token)
      } else {
        return ctx.body = utils.fail("密码错误", 400)
      }
    }
  } catch (error) {

    log4js.error(error.message);
  }
})

// 设置 login_history 表，并根据 login_history 表的信息设置 chart 表
const setLoginHistory = async (user_id, token) => {
  await query(`insert into login_history (user_id,token) values (${user_id},'${token}')`)
  
  const login_rows_sum_today = await query(`select count(id) as sum from login_history`)
  let exposure_sum = login_rows_sum_today[0].sum
  
  const login_rows_sum = await query(`select count(id) as sum from login_history where to_days(login_history.last_login_time)=to_days(now())`)
  let exposure_today = login_rows_sum[0].sum

  await query(`update chart set chart_num='${exposure_today}' where chart_id=1;update chart set chart_num='${exposure_sum}' where chart_id=2`)
}

module.exports = router