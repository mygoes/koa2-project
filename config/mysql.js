// 本地环境
// const mysqlConfig = {
//   host: 'localhost', // 连接的服务器
//   port: 3306, // mysql 服务运行的端口
//   database: 'koa2', // 选择的库  
//   user: 'root', // 用户名
//   password: 'root', // 用户密码   
//   multipleStatements: true, // 允许每个 query 操作时执行多条 sql 语句
//   timezone: "08:00"  // 解决后端时间比数据库慢 8 小时的问题
// };

// 线上环境
const mysqlConfig = {
  host: '43.138.2xx.xx7', // 连接的服务器（改成自己的服务器 ip）
  port: 3306, // mysql 服务运行的端口
  database: 'koa2', // 选择的库  
  user: 'koa2', // 用户名
  password: 'xxxxxx', // 用户密码（改成自己的密码）
  multipleStatements: true, // 允许每个 query 操作时执行多条 sql 语句
  timezone: "08:00"  // 解决后端时间比数据库慢 8 小时的问题
};

module.exports = mysqlConfig;
