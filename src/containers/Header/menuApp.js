export const adminMenu = [
  {
    //quản lý người dùng
    name: "menu.admin.manage-staff",
    menus: [
      // {
      //   name: "menu.admin.staff-manage",
      //   link: "/system/staff-manage",
      // },
      {
        name: "menu.admin.crud-staff",
        link: "/system/user-manage",
      },
      // {
      //   name: "menu.admin.crud",
      //   link: "/system/user-manage",
      // },
      // {
      //   name: "menu.admin.manage-doctor",
      //   link: "/system/user-doctor",
      //   // subMenus: [
      //   //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
      //   //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
      //   // ]
      // },

      // {
      //   name: "menu.admin.manage-admin",
      //   link: "/system/user-admin",
      // },
    ],
  },
 

  

  {
    //quản lý store
    name: "menu.admin.store",
    menus: [
      {
        name: "menu.admin.store-manage",
        link: "/system/store-manage",
      },
    ],
  },

  {
    //quản lý vai trò
    name: "menu.admin.position",
    menus: [
      {
        name: "menu.admin.position-manage",
        link: "/system/position-manage",
      },
    ],
  },
];
