const { User, Blog } = require('./model');
// 删除数据
const update = async () => {
  const delRes = await Blog.destroy({
    where: {
      id: 3,
    },
  });
  // 修改的条数
  console.log(delRes, delRes > 0);
};

update();
