/**
 * 通用工具函数
 */
const log4js = require('./log4js')
const jwt = require('jsonwebtoken')
const config = require('../config/index')
const CODE = {
    Success: 200,

    MovedPermanently: 301, // 永久性重定向 
    Found: 302, // 临时性重定向

    BadRequest: 400, // 请求（语法）错误
    Unauthorized: 401, // 认证失败或 token 过期
    Forbidden: 403, // 用户无权限
    NotFount: 404, // 无法访问

    InternalServerError: 500, // 服务器内部错误
    ServiceUnavailable: 503, // 服务器超负载或正在停机维护
}
module.exports = {
    /**
     * 分页结构封装
     * @param {number} pageNum 
     * @param {number} pageSize 
     */
    pager({ pageNum = 1, pageSize = 10 }) {
        pageNum *= 1;
        pageSize *= 1;
        const skipIndex = (pageNum - 1) * pageSize;
        return {
            page: {
                pageNum,
                pageSize
            },
            skipIndex
        }
    },
    // 封装请求成功后的数据结构体
    success(data = '', message = '请求成功', code = CODE.Success, other = {}) {
        // log4js.debug(data);
        return {
            code, data, message, ...other
        }
    },
    // 请求失败的数据结构体
    fail(message = '请求失败', code = CODE.NotFount, data = '') {
        // log4js.debug(message);
        return {
            code, data, message
        }
    },
    CODE,
    // 解码token
    decodeToken(token) {
        if (token) {
            return jwt.verify(token, config.tokenKey);
        }
        return ''
    },
    // 递归生成菜单
    TreeMenu(rootList, id) {
        var result = []
        for (var i = 0; i < rootList.length; i++) {
            // 取出parentID数组你最后一项，如果是null 那就证明它是第一级菜单-这里String强制转换是因为 断点调试发现取出来的其实是一个数据对象类型，不是一个基本类型的
            // 所以给他来个强制转换成字符串，才能正常对比他是否相等
            if (String(rootList[i]._doc.parentId[rootList[i]._doc.parentId.length - 1]) == String(id)) {
                result.push(rootList[i]._doc)
            }
        }
        // 把遍历出来的一级菜单 加children字段，然后把属于其的菜单往children里加
        result.map(item => {
            item.children = this.TreeMenu(rootList, item._id)
            if (item.children.length === 0) {
                delete item.children
            } else if (item.children.length > 0 && item.children[0].menuType === 2) {
                item.btnList = item.children
            }
        })
        return result
    },
    // 时间格式化
    formateDate(date, format) {
        let fmt = format || 'yyyy-MM-dd hh:mm:ss'
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, date.getFullYear())
        }
        const o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                const val = o[k] + '';
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? val : ('00' + val).substr(val.length));
            }
        }
        return fmt;
    }
}