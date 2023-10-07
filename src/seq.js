/**
 * @description sequelize 实例
 */

const Sequelize = require('sequelize');

const conf = {
  host: 'localhost',
  dialect: 'mysql',
};

const isProd = false;
// 线上环境，使用连接池，开发不用
if (isProd) {
  conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000, // 如果一个连接池 10 s 之内没有被使用，则释放
  };
}
const seq = new Sequelize('koa2-weibo-db', 'root', '12345678', conf);

module.exports = seq;
