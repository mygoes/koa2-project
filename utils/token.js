const jwt = require("jsonwebtoken");
const configs = require('../config/index')
const utils = require('./utils')

// 撒盐：加密的时候混淆 | 密钥
const secret = configs.tokenKey

/**
* @author mygoes mynameiszhayu@163.com
* @description jwt 创建 Token
* @param {object} userInfo
* @param {string | number} expiresIn Token 有效时间
* @return: object 自带参数：iat-签发时间；exp-过期时间
*/
const tokenCreate = (userInfo, expiresIn = configs.tokenExpiresIn) => {
  return jwt.sign(userInfo, secret, { expiresIn });
};

/**
* @author mygoes mynameiszhayu@163.com
* @description 验证 token 结果
*/
const tokenCheck = (ctx, next) => {
  if (ctx.url === '/login/signUp' || ctx.url === '/login/signIn') {
    // 1. 登录 | 注册不需要验证 token
    next()
  } else {
    // 2. 其它接口需要验证 Token
    let token = ctx.request.header['authorization']
    if (token) {
      // 2.1. Token 存在
      return new Promise((resolve, reject) => {
        // 2.1.1. 解析 Token
        jwt.verify(token, secret, (error, decoded) => {
          if (error) {
            console.log('==========token校验中的error==========',error);
            // 2.1.1.1. Token 验证失败
            if (error.name == 'TokenExpiredError') {
              reject(utils.fail('Token 已过期，请重新登录', utils.CODE.Unauthorized))
            } else if (error.name == 'JsonWebTokenError') {
              reject(utils.fail('Token 无效，请勿尝试非法登录', utils.CODE.BadRequest))
            } else {
              reject(utils.fail(error, utils.CODE.BadRequest))
            }
          } else {
            // 2.1.1.2. Token 验证成功
            resolve(utils.success('', '验证成功'));
          }
        })
      })
    } else {
      // 2.2. Token 不存在
      ctx.body = utils.fail('用户无权限', utils.CODE.Forbidden)
    }
  }
}

module.exports = {
  tokenCreate,
  tokenCheck
};
