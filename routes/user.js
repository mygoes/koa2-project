const router = require('koa-router')()
const sd = require('silly-datetime')
const query = require('../utils/query.js')
const { tokenCheck } = require('../utils/token')
const utils = require('../utils/utils')
const log = require('../utils/log4js')
const crypto = require('crypto') // 加密
const multer = require('@koa/multer');
const fs = require('fs');
const path = require('path');
const mkdir = require('mkdirp')

router.prefix('/user')

/**
* @author mygoes mynameiszhayu@163.com
* @description: 列表查询
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

        let result = await query(`select sql_calc_found_rows * from user where is_delete='0' limit ${(currentPage - 1) * pageSize},${pageSize};select found_rows() as total`)
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
* @description: 筛选查询
* @param {string} username 用户名称
* @param {string} phone 电话
* @param {number} currentPage 当前页
* @param {number} pageSize 页容量
*/
router.get('/getOne', async (ctx) => {
  // 检查前端传的参数是否有拼写错误
  let paramOK = Object.keys(ctx.query).length > 0 && Object.keys(ctx.query).every(i => { return ['username', 'phone', 'role', 'state', 'currentPage', 'pageSize'].includes(i) })
  if (!paramOK) {
    // 参数错误
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    await tokenCheck(ctx).then(async res => {
      try {

        const { username, phone, role, state, currentPage, pageSize } = ctx.query

        const result = await query(`select sql_calc_found_rows * from user 
    where (username='${username}' and is_delete='0') 
    or (phone='${phone}' and is_delete='0') 
    or (role='${role}' and is_delete='0') 
    or (state='${state}' and is_delete='0') 
    or (username='${username}' and phone='${phone}' and is_delete='0') 
    or (username='${username}' and role='${role}' and is_delete='0') 
    or (username='${username}' and state='${state}' and is_delete='0') 
    or (phone='${phone}' and role='${role}' and is_delete='0') 
    or (phone='${phone}' and state='${state}' and is_delete='0') 
    or (role='${role}' and state='${state}' and is_delete='0') 
    or (username='${username}' and phone='${phone}' and role='${role}' and is_delete='0') 
    or (username='${username}' and phone='${phone}' and state='${state}' and is_delete='0') 
    or (username='${username}' and role='${role}' and state='${state}' and is_delete='0') 
    or (phone='${phone}' and role='${role}' and state='${state}' and is_delete='0') 
    or (username='${username}' and phone='${phone}' and role='${role}' and state='${state}' and is_delete='0') 
    limit ${(currentPage - 1) * pageSize},${pageSize};select found_rows() as total`)

        let data = result[0]
        let total = result[1][0].total

        ctx.body = utils.success(data, '请求成功', 200, { total })
      } catch (error) {
        ctx.body = utils.fail(`筛选查询异常:${error.stack}`)
      }
    }).catch(error => {
      ctx.body = error
    })
  }
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 新增用户
* @param {string} username 用户名称
* @param {string} password 密码
* @param {string} phone 电话
* @param {string} email 邮箱
* @param {string} role 权限
* @param {string} note 备注
* @param {string} state 状态
*/
router.post('/addOne', async (ctx) => {
  await tokenCheck(ctx).then(async res => {
    try {
      const { username, password, phone, email, role, note, state } = ctx.request.body
      let sameName = await query(`select username from user where (username='${username}' and is_delete='0')`)

      if (sameName.length == 0) {
        // 用户名称作为唯一 ID，不能重复
        await query(`insert into user (username, password, phone, email, role, note, state) values ('${username}','${password}','${phone}','${email}','${role}','${note}','${state}')`)

        ctx.body = utils.success('', '新增成功')
      } else {
        ctx.body = utils.fail('用户名称重复')
      }

    } catch (error) {
      ctx.body = utils.fail(`信息查询异常:${error}`)
      log.error(error)
    }
  }).catch(error => {
    ctx.body = error
  })
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 修改用户信息
* @param {string} username 用户名称
* @param {string} password 密码
* @param {string} phone 电话
* @param {string} email 邮箱
* @param {string} role 权限
* @param {string} note 备注
* @param {string} state 状态
* @param {string} avatar 头像
* @param {string} signature 个性签名
* @param {string} industry 所在行业
* @param {string} backgroundImage 背景图
* @param {string} encryptedOne 密保问题 1
* @param {string} encryptedOneAnswer 密保问题 1 的答案
* @param {string} encryptedTwo 密保问题 2
* @param {string} encryptedTwoAnswer 密保问题 2 的答案
*/
router.post('/editOne', async (ctx) => {
  await tokenCheck(ctx).then(async res => {
    try {
      const { id, username = '', password = '', phone = '', email = '', role = '', note = '', state = '1', avatar = '', gender = '', signature = '', industry = '', backgroundImage = '', encryptedOne = '', encryptedOneAnswer = '', encryptedTwo = '', encryptedTwoAnswer = '' } = ctx.request.body

      // 用户名称校验
      if (username !== '') {
        if (username.length < 2 || username.length > 16) {
          return ctx.body = utils.fail("用户名称的长度在 2~16 之间", 400)
        } else {
          await query(`update user set username='${username}' where id=${id}`)
        }
      }
      // 密码验证
      if (password !== '') {
        if (password.length < 4 || password.length > 16) {
          return ctx.body = utils.fail("密码的长度在 24~16 之间", 400)
        } else {
          const passwordCipher = crypto.createHash('md5').update(password).digest('hex')
          await query(`update user set password='${passwordCipher}' where id=${id}`)
        }
      }
      // 手机号码校验
      if (phone !== '') {
        const reg =
          /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!reg.test(phone)) {
          return ctx.body = utils.fail("手机号码格式错误! 请检查后重新输入", 400)
        } else {
          await query(`update user set phone='${phone}' where id=${id}`)
        }
      }
      // 邮箱校验
      if (email !== '') {
        const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!reg.test(email)) {
          return ctx.body = utils.fail("邮箱格式错误! 请检查后重新输入", 400)
        } else {
          await query(`update user set email='${email}' where id=${id}`)
        }
      }
      if (role !== '') await query(`update user set role='${role}' where id=${id}`)
      if (note !== '') await query(`update user set note='${note}' where id=${id}`)
      if (state !== '') await query(`update user set state='${state}' where id=${id}`)
      if (avatar !== '') await query(`update user set avatar='${avatar}' where id=${id}`)
      if (gender !== '') await query(`update user set gender='${gender}' where id=${id}`)
      if (signature !== '') await query(`update user set signature='${signature}' where id=${id}`)
      if (industry !== '') await query(`update user set industry='${industry}' where id=${id}`)
      if (backgroundImage !== '') await query(`update user set background_image='${backgroundImage}' where id=${id}`)
      if (encryptedOne !== '') await query(`update user set encrypted_one='${encryptedOne}' where id=${id}`)
      if (encryptedOneAnswer !== '') await query(`update user set encrypted_one_answer='${encryptedOneAnswer}' where id=${id}`)
      if (encryptedTwo !== '') await query(`update user set encrypted_two='${encryptedTwo}' where id=${id}`)
      if (encryptedTwoAnswer !== '') await query(`update user set encrypted_two_answer='${encryptedTwoAnswer}' where id=${id}`)

      ctx.body = utils.success("", "修改成功")
    } catch (error) {
      ctx.body = utils.fail(`修改用户信息失败:${error.stack}`);
    }
  }).catch(error => {
    ctx.body = error
  })
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 修改状态
* @param {string} id
*/
router.post('/editState', async (ctx) => {
  await tokenCheck(ctx).then(async res => {
    try {
      const { id } = ctx.request.body

      if (id !== '') {
        let stateObj = await query(`select state from user where (id='${id}') `)
        let stateOld = stateObj[0].state // MySQL 数据库返回的是一个数组对象
        let stateNew = stateOld == '0' ? '1' : stateOld == '1' ? '0' : null
        await query(`update user set state=${stateNew} where id=${id}`)
      }
      ctx.body = utils.success("", "修改成功")
    } catch (error) {
      ctx.body = utils.fail(`修改状态失败:${error.stack}`);
    }
  }).catch(error => {
    ctx.body = error
  })
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: （软）删除用户信息
* @param {string} id
*/
router.post('/delOne', async (ctx) => {
  await tokenCheck(ctx).then(async res => {
    try {
      const { id } = ctx.request.body

      // 获取当前时间
      const time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')

      if (id !== '') await query(`update user set is_delete='1',delete_time='${time}' where id=${id}`)
      ctx.body = utils.success("", "删除成功")
    } catch (error) {
      ctx.body = utils.fail(`删除用户信息失败:${error.stack}`);
    }
  }).catch(error => {
    ctx.body = error
  })
})

/**
* @author mygoes mynameiszhayu@163.com
* @description: 获取用户个人信息
* @param {string} user_id 用户 id
*/
router.get('/getUserInfo', async (ctx) => {
  // 检查前端传的参数是否为空，且是否有拼写错误
  let paramOK = Object.keys(ctx.query).length > 0 && Object.keys(ctx.query).every(i => {
    return ['user_id'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    // Token 验证
    await tokenCheck(ctx).then(async () => {
      try {
        let { user_id } = ctx.query
        let result = await query(`select username,phone,email,role,note,state,avatar,gender,signature,industry,avatar,background_image,encrypted_one,encrypted_two,industry,signature,gender from user where (id=${user_id} and is_delete='0')`)

        if (result.length == 0) {
          ctx.body = utils.fail('没有该用户')
        } else {
          ctx.body = utils.success(result[0], '请求成功', 200)
        }
      } catch (error) {
        ctx.body = utils.fail(`信息查询异常:${error}`)
        log.error(error)
      }
    }).catch(error => {
      ctx.body = error
    })
  }
})

// 上传的配置
const storage = multer.diskStorage({
  //文件保存路径
  destination: async (req, file, cb) => {
    let day = sd.format(new Date(), "YYYYMMDD");
    let dir = path.join("public/avatar/upload", day);
    await mkdir(dir);
    cb(null, dir);
  },
  //修改文件名称
  filename: function (req, file, cb) {
    const fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
const upload = multer({ storage: storage })
/**
* @author mygoes mynameiszhayu@163.com
* @description: 修改头像
* @param {string} id
*/
router.post('/editAvatar', upload.single('file'), async (ctx) => {
  // 检查前端传的参数是否拼写错误
  let paramOK = Object.keys(ctx.request.body).length > 0 && Object.keys(ctx.request.body).every(i => {
    return ['user_id', 'file'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    await tokenCheck(ctx).then(async () => {
      try {
        const { user_id } = ctx.request.body

        if (user_id !== '') {
          let dir = sd.format(new Date(), "YYYYMMDD"); // 目录
          const filename = ctx.request.file.filename; //返回文件名
          const data = { message: "上传成功", url: "" }
          let extname = path.extname(filename); //获取文件后缀名
          let extnameList = {
            ".jpg": "",
            ".png": "",
            ".jpeg": "",
            ".jfif": ""
          }
          if (!(extname in extnameList)) {
            // 删掉上传的文件
            fs.unlink(`./public/avatar/upload/${dir}${filename}`, (err) => {
              if (err) return err;
            })
            data.message = "非法图片格式"
          } else {
            const doc = await query(`select avatar from user where id=${user_id}`)

            const { avatar } = doc[0]

            if (avatar !== "/avatar/default.jpg") {
              // 假如已经不是默认头像，那么就删掉旧头像，如果是默认头像，就不要删掉
              fs.unlink(`./public${avatar}`, err => {
                if (err) return err;
              })
            }
            const completePath = `/avatar/upload/${dir}/${filename}`

            data.url = completePath

            await query(`update user set avatar='${completePath}' where id=${user_id}`)
          }
          ctx.body = data
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

// 上传的配置 - 背景图片
const storageBgImg = multer.diskStorage({
  //文件保存路径
  destination: async (req, file, cb) => {
    let day = sd.format(new Date(), "YYYYMMDD");
    let dir = path.join("public/background/upload", day);
    await mkdir(dir);
    cb(null, dir);
  },
  //修改文件名称
  filename: function (req, file, cb) {
    const fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
const uploadBgImg = multer({ storage: storageBgImg })

/**
* @author mygoes mynameiszhayu@163.com
* @description: 修改背景
* @param {string} id
*/
router.post('/editBgImg', uploadBgImg.single('file'), async (ctx) => {
  // 检查前端传的参数是否拼写错误
  let paramOK = Object.keys(ctx.request.body).length > 0 && Object.keys(ctx.request.body).every(i => {
    return ['user_id', 'file'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    await tokenCheck(ctx).then(async () => {
      try {
        const { user_id } = ctx.request.body

        if (user_id !== '') {
          let dir = sd.format(new Date(), "YYYYMMDD"); // 目录
          const filename = ctx.request.file.filename; //返回文件名
          const data = { message: "上传成功", url: "" }
          let extname = path.extname(filename); //获取文件后缀名
          let extnameList = {
            ".jpg": "",
            ".png": "",
            ".jpeg": "",
            ".jfif": ""
          }
          if (!(extname in extnameList)) {
            // 删掉上传的文件
            fs.unlink(`./public/background/upload/${dir}${filename}`, (err) => {
              if (err) return err;
            })
            data.message = "非法图片格式"
          } else {
            const doc = await query(`select background_image from user where id=${user_id}`)

            const { background_image } = doc[0]

            if (background_image !== "/background/default.jpg") {
              // 假如已经不是默认头像，那么就删掉旧头像，如果是默认头像，就不要删掉
              fs.unlink(`./public${background_image}`, err => {
                if (err) return err;
              })
            }
            const completePath = `/background/upload/${dir}/${filename}`

            data.url = completePath

            await query(`update user set background_image='${completePath}' where id=${user_id}`)
          }
          ctx.body = data
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
* @description: 校验密码是否正确
* @param {number} id 用户 id
* @param {string} password 密码
*/
router.post('/validatePsw', uploadBgImg.single('file'), async (ctx) => {
  // 检查前端传的参数是否拼写错误
  let paramOK = Object.keys(ctx.request.body).length > 0 && Object.keys(ctx.request.body).every(i => {
    return ['id', 'password'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    await tokenCheck(ctx).then(async () => {
      try {
        const { id, password = '' } = ctx.request.body

        // 密码验证
        if (password !== '') {
          if (password.length < 4 || password.length > 16) {
            return ctx.body = utils.fail("密码的长度在 24~16 之间", 400)
          } else {
            const passwordCipher = crypto.createHash('md5').update(password).digest('hex')
            let sqlPassword = await query(`select password from user where id=${id}`)

            if (passwordCipher == sqlPassword[0].password) {
              ctx.body = utils.success("", "认证通过")
            } else {
              ctx.body = utils.fail("密码错误！认证不通过")
            }
          }
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
* @description: 校验密保问题是否正确
* @param {number} id 用户 id
* @param {string} encryptedOneAnswer 密保问题 1 的答案
* @param {string} encryptedTwoAnswer 密保问题 2 的答案
*/
router.post('/validateEncrypted', uploadBgImg.single('file'), async (ctx) => {
  // 检查前端传的参数是否拼写错误
  let paramOK = Object.keys(ctx.request.body).length > 0 && Object.keys(ctx.request.body).every(i => {
    return ['id', 'encryptedOneAnswer', 'encryptedTwoAnswer'].includes(i)
  })
  if (!paramOK) {
    ctx.body = utils.fail(`参数错误，请检查`)
  } else {
    await tokenCheck(ctx).then(async () => {
      try {
        const { id, encryptedOneAnswer = '', encryptedTwoAnswer = '' } = ctx.request.body

        // 密码验证
        if (encryptedOneAnswer !== '' && encryptedTwoAnswer !== '') {
          let sqlEncrypted = await query(`select encrypted_one_answer,encrypted_two_answer from user where id=${id}`)

          if (encryptedOneAnswer == sqlEncrypted[0].encrypted_one_answer && encryptedTwoAnswer == sqlEncrypted[0].encrypted_two_answer) {
            ctx.body = utils.success("", "认证通过")
          } else {
            ctx.body = utils.fail("答案错误！认证不通过")
          }
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

module.exports = router