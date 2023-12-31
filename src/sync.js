/**
 * @description sequelize 同步数据库
 */

const seq = require('./seq');

require('./model');

// 测试连接
seq
  .authenticate()
  .then(() => {
    console.log('auth ok');
  })
  .catch(() => {
    console.log('auth err');
  });

// 执行同步 force:true 同步时如果已存在某个表会先删掉
seq.sync({ force: true }).then(() => {
  console.log('sync ok');
  // 退出
  process.exit();
});
