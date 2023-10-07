const { User, Blog } = require('./model');
// 修改数据
const update = async () => {
  const updateRes = await User.update(
    {
      nickName: '张三',
    },
    {
      where: {
        username: 'zhangsan',
      },
    }
  );
  // 修改的条数
  console.log(updateRes, updateRes[0] > 0);
};

update();
