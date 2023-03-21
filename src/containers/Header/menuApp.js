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

  {
    //quản lý khách hàng
    name: "menu.admin.customer",
    menus: [
      {
        name: "menu.admin.customer-manage",
        link: "/system/customer-manage",
      },
    ],
  },

  {
    //quản lý product
    name: "menu.admin.product",
    menus: [
      {
        name: "menu.admin.product-manage",
        link: "/system/product-manage",
      },
      {
        name: "menu.admin.color-manage",
        link: "/system/color-manage",
      },

      {
        name: "menu.admin.producer-manage",
        link: "/system/producer-manage",
      },

      {
        name: "menu.admin.category-manage",
        link: "/system/category-manage",
      },

      {
        name: "menu.admin.product-details-manage",
        link: "/system/product-details-manage",
      },
    ],
  },
];
