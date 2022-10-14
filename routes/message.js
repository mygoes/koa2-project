const router = require('koa-router')()
const date = require('silly-datetime')
const query = require('../utils/query.js')
const { tokenCheck } = require('../utils/token')
const utils = require('../utils/utils')
const log = require('../utils/log4js')
const FastScanner = require('fastscan')

router.prefix('/message')

// 并根据 message 表的信息设置 chart 表
const setMessageSum = async () => {


  let reply_id_sum = await query(`select count(id) as reply_id_sum from reply`) // 总回复数

  let message_id_sum = await query(`select count(id) as message_id_sum from message`) // 总留言数

  let message_sum = reply_id_sum[0].reply_id_sum + message_id_sum[0].message_id_sum
  
  query(`update chart set chart_num='${message_sum}' where chart_id=4`)

  let reply_id_sum_today = await query(`select count(id) as reply_id_sum_today from reply where to_days(reply.create_time)=to_days(now())`)  // 当日的总回复数

  let message_id_sum_today = await query(`select count(id) as message_id_sum_today from message where to_days(message.create_time)=to_days(now())`) // 当日的总留言数

  let message_today = reply_id_sum_today[0].reply_id_sum_today + message_id_sum_today[0].message_id_sum_today

  query(`update chart set chart_num='${message_today}' where chart_id=3`)
}

/**
* @author mygoes mynameiszhayu@163.com
* @description: 获取留言
* @param {string} currentPage 当前页
* @param {string} pageSize 页容量
*/
router.get('/getList', async (ctx) => {
  // 检查前端传的参数是否为空，且是否有拼写错误
  let paramOK = Object.keys(ctx.query).length > 0 && Object.keys(ctx.query).every(i => {
    return ['currentPage', 'pageSize'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    // Token 验证
    await tokenCheck(ctx).then(async () => {
      try {
        let { currentPage, pageSize } = ctx.query

        /**
        * @author mygoes mynameiszhayu@163.com
        * @description order by create_time 按 create_time 排序
        * @description desc 降序
        * @description 若字段相同，根据 where 后面的逻辑合并，写在等于号前面的优先级>写在等于号后面的优先级
        */
        let result = await query(`select sql_calc_found_rows * from user,message where message.user_id=user.id order by message.create_time desc limit ${(currentPage - 1) * pageSize},${pageSize};select found_rows() as total`)

        let data = result[0] // 请求到的数据

        let total = result[1][0].total // 数据总条数
        ctx.body = utils.success(data, '请求成功', 200, { total })
      } catch (error) {
        ctx.body = utils.fail(`信息查询异常:${error}`)
        log.error(error)
      }
    }).catch(error => {
      ctx.body = error
    })
  }
})


/**
* @author mygoes mynameiszhayu@163.com
* @description: 获取留言的回复
* @param {string} currentPage 当前页
* @param {string} pageSize 页容量
* @param {string} message_id 留言的 id
*/
router.get('/getReply', async (ctx) => {
  // 检查前端传的参数是否为空，且是否有拼写错误
  let paramOK = Object.keys(ctx.query).length > 0 && Object.keys(ctx.query).every(i => {
    return ['currentPage', 'pageSize', 'message_id'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    // Token 验证
    await tokenCheck(ctx).then(async () => {
      try {
        let { currentPage, pageSize, message_id } = ctx.query

        /* 
        // 可以用，但是回复留言的回复时没有箭头指向，不符合用户体验
        let result = await query(`select sql_calc_found_rows distinct * from user,reply where (reply.father_id=${message_id} and reply.user_id=user.id) limit ${(currentPage - 1) * pageSize},${pageSize};select found_rows() as total`)
        console.log('result--------------', result);
        */

        let result = await query(`
            select sql_calc_found_rows *
            from
            (
              select reply.id,reply.message_id,reply.content,reply.user_id,reply.target_id,reply.reply_type,reply.father_id,reply.create_time,user.username,user.avatar
              from user,reply 
              where (reply.father_id=${message_id} and reply.user_id=user.id) limit ${(currentPage - 1) * pageSize},${pageSize}
            ) data_finally
            left join
            (
              select res3.id as reply_id,res4.username as target_username
              from (
                select res1.id,res1.target_id,res2.user_id
                from (select reply.id,reply.target_id from reply where (message_id=${message_id} and reply_type='2')) res1
                left join
                (select r.id,reply.user_id from reply as r,reply where (reply.id = r.target_id and r.message_id=${message_id} and r.reply_type='2')) res2
                on 
                res2.id=res1.id
              ) res3
              left join 
              (select user.id,user.username from user) res4
              on
              res3.user_id=res4.id
            ) name_finally
            on
            data_finally.id=name_finally.reply_id;
            select found_rows() as total
            `)

        let data = result[0] // 请求到的数据
        let total = result[1][0].total // 数据总条数
        ctx.body = utils.success(data, '请求成功', 200, { total })
      } catch (error) {
        ctx.body = utils.fail(`信息查询异常:${error}`)
        log.error(error)
      }
    }).catch(error => {
      ctx.body = error
    })
  }
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 新增留言
* @param {string} user_id 用户 id
* @param {string} content 内容
*/
router.post('/addOne', async (ctx) => {
  // 检查前端传的参数是否为空，且是否有拼写错误
  let paramOK = Object.keys(ctx.request.body).length > 0 && Object.keys(ctx.request.body).every(i => {
    return ['user_id', 'content'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    await tokenCheck(ctx).then(async res => {
      try {
        const { user_id, content } = ctx.request.body

        // 违禁词校验
        let result = await query(`select word from banned_words`)
        let resultArr = result.map(item => {
          return Object.values(item)[0]
        })
        const scanner = new FastScanner(resultArr);
        const hits = scanner.hits(content);
        const wordsArr = Object.keys(hits);
        if (wordsArr.length == 0) {
          // 没有违禁词

          await query(`insert into message (user_id, content) values (${user_id},'${content}')`)

          setMessageSum()

          ctx.body = utils.success('', '留言成功')
        } else {
          // 含有违禁词
          ctx.body = utils.fail(`请文明留言，含有违禁词:${wordsArr}`)
        }
      } catch (error) {
        ctx.body = utils.fail(`操作异常:${error}`)
        log.error(error)
      }
    }).catch(error => {
      ctx.body = error
    })
  }
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 新增留言的回复
* @param {string} message_id 外键（对应留言表主键 id）
* @param {string} content 回复内容
* @param {string} user_id 回复人 user_id
* @param {string} target_id 回复目标 user_id
* @param {string} reply_type 回复的类型（1-针对评论 message 的回复；2-针对回复 reply 的回复）
* @param {string} father_id 父元素的 id（若 reply_type 为 message，father_id 为 message_id；若 reply_type 为 reply，father_id 为这条回复的父回复的 id）
*/
router.post('/addReply', async (ctx) => {
  // 检查前端传的参数是否为空，且是否有拼写错误
  let paramOK = Object.keys(ctx.request.body).length > 0 && Object.keys(ctx.request.body).every(i => {
    return ['message_id', 'content', 'user_id', 'target_id', 'reply_type', 'father_id'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    await tokenCheck(ctx).then(async () => {
      try {
        // 违禁词校验
        let result = await query(`select word from banned_words`)
        let resultArr = result.map(item => {
          return Object.values(item)[0]
        })
        const scanner = new FastScanner(resultArr);
        const hits = scanner.hits(ctx.request.body.content);
        const wordsArr = Object.keys(hits);
        if (wordsArr.length == 0) {
          // 没有违禁词
          const { message_id, content, user_id, target_id, reply_type, father_id } = ctx.request.body

          // 增加数据到回复表 reply 中
          await query(`insert into reply (message_id, content, user_id, target_id, reply_type, father_id) values (${message_id},'${content}',${user_id},${target_id},'${reply_type}',${father_id})`)

          setMessageSum()

          let reply_id_sum = await query(`select count(id) as sum from reply where father_id=${father_id}`) // 总留言数

          await query(`update message set reply_num='${reply_id_sum[0].sum}' where id=${father_id}`)

          ctx.body = utils.success('', '评论成功')
        } else {
          // 含有违禁词
          ctx.body = utils.fail(`请文明留言，含有违禁词:${wordsArr}`)
        }
      } catch (error) {
        ctx.body = utils.fail(`操作异常:${error}`)
        log.error(error)
      }
    }).catch(error => {
      ctx.body = error
    })
  }
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 获取违禁词
*/
router.get('/getBannedWords', async (ctx) => {
  // Token 验证
  await tokenCheck(ctx).then(async () => {
    try {
      let result = await query(`select word from banned_words`)
      let resultArr = result.map(item => {
        return Object.values(item)[0]
      })
      ctx.body = utils.success(resultArr)
    } catch (error) {
      ctx.body = utils.fail(`操作异常:${error}`)
      log.error(error)
    }
  }).catch(error => {
    ctx.body = error
  })
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 获取总留言数和今日留言数
*/
router.get('/getSum', async (ctx) => {
  // Token 验证
  await tokenCheck(ctx).then(async () => {
    try {
      let reply_num_sum = await query(`select sum(reply_num) as sum from message`) // 总回复数

      let reply_rows_sum = await query(`select count(id) as sum from message`) // 总留言数

      let sum = reply_num_sum[0].sum + reply_rows_sum[0].sum

      let reply_num_sum_today = await query(`select count(id) as sum from reply where to_days(reply.create_time)=to_days(now())`)  // 当日的总回复数

      let reply_rows_sum_today = await query(`select count(id) as sum from message where to_days(message.create_time)=to_days(now())`) // 当日的总留言数

      let sum_today = reply_num_sum_today[0].sum + reply_rows_sum_today[0].sum

      ctx.body = utils.success({ sum, sum_today })
    } catch (error) {
      ctx.body = utils.fail(`操作异常:${error}`)
      log.error(error)
    }
  }).catch(error => {
    ctx.body = error
  })
})


module.exports = router