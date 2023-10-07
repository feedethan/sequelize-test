const { User, Blog } = require('./model');

// 查询数据

const select = async () => {
  //   // 查一条
  //   const zhangsan = await User.findOne({
  //     where: {
  //       userName: 'zhangsan',
  //     },
  //   });
  //   console.log(zhangsan.dataValues);

  //   //   查特定列
  //   const zhangsanname = await User.findOne({
  //     where: {
  //       userName: 'zhangsan',
  //     },
  //     attributes: ['userName', 'nickName'],
  //   });
  //   console.log(zhangsanname.dataValues);

  //   //   查一个列表
  //   const lisiList = await Blog.findAll({
  //     where: {
  //       userId: 2,
  //     },
  //     // 排序 倒序
  //     order: [['id', 'desc']],
  //   });
  //   // 此时是一个数组
  //   console.log(lisiList.map((blog) => blog.dataValues));

  // 分页
  //   const pageList = await Blog.findAll({
  //     limit: 2, // 一页几条
  //     offset: 0, // 跳过几条
  //     order: [
  //       ['id', 'desc'], // id倒序
  //     ],
  //   });
  //   console.log(pageList.map((blog) => blog.dataValues));

  // 分页 带总数
  //   const pageListAll = await Blog.findAndCountAll({
  //     limit: 2, // 一页几条
  //     offset: 0, // 跳过几条
  //     order: [
  //       ['id', 'desc'], // id倒序
  //     ],
  //   });
  //   console.log(
  //     'total: ',
  //     pageListAll.count,
  //     pageListAll.rows.map((blog) => blog.dataValues)
  //   );

  //   // 连表查询1
  //   const blogAndUserList1 = await Blog.findAndCountAll({
  //     order: [
  //       ['id', 'desc'], // id倒序
  //     ],
  //     include: [
  //       {
  //         model: User,
  //         attributes: ['userName', 'nickName'],
  //         where: {
  //           userName: 'lisi',
  //         },
  //       },
  //     ],
  //   });
  //   console.log(
  //     'count: ',
  //     blogAndUserList1.count,
  //     blogAndUserList1.rows.map((blog) => {
  //       // 数据嵌套 处理下返回
  //       const blogVal = blog.dataValues;
  //       blogVal.user = blogVal.user.dataValues;
  //       return blogVal;
  //     })
  //   );

  // 连表查询2
  const blogAndUserList2 = await User.findAndCountAll({
    attributes: ['userName', 'nickName'],
    include: [
      {
        model: Blog,
      },
    ],
  });
  console.log(
    'count: ',
    blogAndUserList2.count,
    blogAndUserList2.rows.map((blog) => {
      // 数据嵌套 处理下返回
      const userVal = blog.dataValues;
      userVal.blogs = userVal.blogs.map((blog) => blog.dataValues);
      return userVal;
    })
  );
};

select();
