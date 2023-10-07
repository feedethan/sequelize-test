/**
 * @description 用户数据模型
 *
 */
const Sequelize = require('sequelize');
const seq = require('./seq');

// users  表名自动复数
const User = seq.define('user', {
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一',
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '密码',
  },
  nickName: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '昵称',
  },
});

// blogs
const Blog = seq.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// 外键关联
Blog.belongsTo(User, {
  // 创建外键 Blog.userId -> USER.id
  foreignKey: 'userId',
});
// 写两次才能实现连表查询
User.hasMany(Blog, {
  // 创建外键 Blog.userId -> USER.id
  foreignKey: 'userId',
});

module.exports = { User, Blog };
