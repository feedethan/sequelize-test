const { User, Blog } = require('./model');
// 插入数据
const createUser = async () => {
  const zhang = await User.create({
    userName: 'zhangsan',
    password: '1234zhang',
    nickName: 'mr.zhang',
  });
  const zhangId = zhang.dataValues.id;
  console.log(zhang.dataValues);

  const lisi = await User.create({
    userName: 'lisi',
    password: 'lisi1234',
    nickName: 'mr.li',
  });
  const lisiId = lisi.dataValues.id;

  const blog1 = await Blog.create({
    title: 'lisi的标题',
    content: 'lsdbglsbdsldbglbsdbgsbg',
    userId: lisiId,
  });
  console.log(blog1.dataValues);
  const blog2 = await Blog.create({
    title: 'lisi的标题2',
    content: 'lsdbglsbdsldbglbsdbgsbg2',
    userId: lisiId,
  });
  const blog3 = await Blog.create({
    title: 'lisi的标题3',
    content: 'lsdbglsbdsldbglbsdbgsbg3',
    userId: lisiId,
  });
};

createUser();
