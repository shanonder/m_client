const menuData = [{
  name: '资源管理',
  icon: 'schedule',
  path: 'assets',
}, {
  name: '版本管理',
  icon: 'dashboard',
  path: 'branch',
  children: [{
    name: '创建版本',
    path: 'branch-add-form',
  }, {
    name: '删除版本',
    path: 'branch-del-form',
  }],
}, {
  name: '用户管理',
  icon: 'idcard',
  path: 'member',
  children: [{
    name: '添加用户',
    path: 'add-form',
    authority: 'admin',
  }, {
    name: '用户管理',
    path: 'set-power-form',
    authority: 'admin',
  }, {
    name: '修改密码',
    path: 'change-password-form',

  }],
}];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    const result = {
      ...item,
      path: `${parentPath}${item.path}`,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
