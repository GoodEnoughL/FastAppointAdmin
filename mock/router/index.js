import { baseAddress } from "@/api/url";
import Mock from "mockjs";
import { baseData } from "../base.ts";

export const adminRoutes = [
  {
    menuUrl: "/system",
    menuName: "系统管理",
    icon: "setting-fill",
    tip: "new",
    parentPath: '',
    children: [
      {
        parentPath: '/system',
        menuUrl: "/system/department",
        menuName: "部门管理",
        tip: "new",
        cacheable: true
      },
      {
        parentPath: '/system',
        menuUrl: "/system/user",
        menuName: "用户管理",
        tip: "dot",
      },
      {
        parentPath: '/system',
        menuUrl: "/system/role",
        menuName: "角色管理",
        tip: "12",
      },
      {
        parentPath: '/system',
        menuUrl: "/system/menu",
        menuName: "菜单管理",
        cacheable: true
      },
    ],
  },
  {
    menuUrl: "/list",
    menuName: "列表页面",
    icon: "detail-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/list',
        menuUrl: "/list/table-with-search",
        menuName: "表格搜索",
      },
      {
        parentPath: '/list',
        menuUrl: "/list/table-custom",
        menuName: "自定义表格",
      },
      {
        parentPath: '/list',
        menuUrl: "/list/list",
        menuName: "普通列表",
      },
      {
        parentPath: '/list',
        menuUrl: "/list/card-list",
        menuName: "卡片列表",
      },
    ],
  },
  {
    menuUrl: "/form",
    menuName: "表单页面",
    tip: "dot",
    icon: "file-text-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/form',
        menuUrl: "/form/base-form-view",
        menuName: "基本表单",
        cacheable: true,
      },
      {
        parentPath: '/form',
        menuUrl: "/form/advance-form",
        menuName: "高级表单",
        cacheable: true,
      },
      {
        parentPath: '/form',
        menuUrl: "/form/step-form",
        menuName: "分步表单",
      },
      {
        parentPath: '/form',
        menuUrl: "/form/form-verify",
        menuName: "表单验证",
      },
    ],
  },
  {
    menuUrl: "/result",
    menuName: "结果页面",
    icon: "file-unknown-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/result',
        menuUrl: "/result/success",
        menuName: "成功页面",
      },
      {
        parentPath: '/result',
        menuUrl: "/result/fail",
        menuName: "失败页面",
      },
    ],
  },
  {
    menuUrl: "/exception",
    menuName: "异常页面",
    icon: "error-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/exception',
        menuUrl: "/exception/404",
        menuName: "404页面",
      },
      {
        parentPath: '/exception',
        menuUrl: "/exception/403",
        menuName: "403页面",
      },
      {
        parentPath: '/exception',
        menuUrl: "/exception/500",
        menuName: "500页面",
      },
    ],
  },
  {
    menuUrl: "/editor",
    menuName: "编辑器",
    tip: "12",
    icon: "edit-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/editor',
        menuUrl: "/editor/rich-text",
        menuName: "富文本",
      },
      {
        parentPath: '/editor',
        menuUrl: "/editor/markdown",
        menuName: "markdown",
      },
    ],
  },
  {
    menuUrl: "/excel",
    menuName: "Excel",
    icon: "file-excel-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/excel',
        menuUrl: "/excel/export-excel",
        menuName: "导出Excel",
      },
      {
        parentPath: '/excel',
        menuUrl: "/excel/export-rows-excel",
        menuName: "导出选中行",
      },
    ],
  },
  {
    menuUrl: "/draggable",
    menuName: "拖拽",
    icon: "interation-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/draggable',
        menuUrl: "/draggable/dialog-draggable",
        menuName: "拖拽对话框",
      },
      {
        parentPath: '/draggable',
        menuUrl: "/draggable/card-draggable",
        menuName: "卡片拖拽",
        cacheable: true,
      },
    ],
  },
  {
    menuUrl: "/next",
    menuName: "多级菜单",
    icon: "golden-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/next',
        menuUrl: "/next/menu1",
        menuName: "menu-1",
        cacheable: true
      },
      {
        parentPath: '/next',
        menuUrl: "/next/menu2",
        menuName: "menu-2",
        children: [
          {
            parentPath: '/next/menu2',
            menuUrl: "/next/menu2/menu-2-1",
            menuName: "menu-2-1",
            children: [
              {
                parentPath: '/next/menu2/menu-2-1',
                menuUrl: "/next/menu2/menu-2-1/menu-2-1-1",
                menuName: "menu-2-1-1",
                cacheable: true
              },
              {
                parentPath: '/next/menu2/menu-2-1',
                menuUrl: "/next/menu2/menu-2-1/menu-2-1-2",
                menuName: "menu-2-1-2",
              }
            ]
          },
          {
            parentPath: '/next/menu2',
            menuUrl: "/next/menu2/menu-2-2",
            menuName: "menu-2-2",
            cacheable: true
          },
        ],
      },
    ],
  },
  {
    menuUrl: "/map",
    menuName: "地图",
    icon: "medium-square-fill",
    children: [
      {
        parentPath: '/map',
        menuUrl: "/map/gaode",
        menuName: "高德地图",
      },
      {
        parentPath: '/map',
        menuUrl: "/map/baidu",
        menuName: "百度地图",
      }
    ]
  },
  {
    menuUrl: "/other",
    menuName: "其它功能",
    icon: "appstore-fill",
    parentPath: '',
    children: [
      {
        parentPath: '/other',
        menuUrl: "/other/print",
        menuName: "打印",
      },
      {
        parentPath: '/other',
        menuUrl: "/other/tip",
        menuName: "消息提示",
      },
      {
        parentPath: '/other',
        menuUrl: "/other/clipboard",
        menuName: "剪切板",
      },
      {
        parentPath: '/other',
        menuUrl: "http://www.baidu.com",
        menuName: "外链",
      },
      {
        parentPath: '/other',
        menuUrl: "/other/cropper",
        menuName: "图片裁剪",
      },
      {
        parentPath: '/other',
        menuUrl: "/other/qrcode",
        menuName: "二维码",
      },
      {
        parentPath: '/other',
        menuUrl: "/other/css-animation",
        menuName: "Css动画",
      },
      {
        parentPath: '/other',
        menuUrl: "/other/descriptions",
        menuName: "详情页面",
      }
    ],
  },
];
export const editorRoutes = [
  {
    menuUrl: "/list",
    menuName: "列表页面",
    icon: "list",
    children: [
      {
        menuUrl: "/list/table-with-search",
        menuName: "表格搜索",
      },
      {
        menuUrl: "/list/grid-list",
        menuName: "卡片列表",
      },
    ],
  },
  {
    menuUrl: "/form",
    menuName: "表单页面",
    tip: "new",
    icon: "form",
    children: [
      {
        menuUrl: "/form/base-form-view",
        menuName: "基本表单",
        cacheable: true,
      },
      {
        menuUrl: "/form/advance-form",
        menuName: "高级表单",
        cacheable: true,
      },
      {
        menuUrl: "/form/step-form",
        menuName: "分步表单",
      },
      {
        menuUrl: "/form/tip",
        menuName: "通知提示",
      },
    ],
  },
  {
    menuUrl: "/editor",
    menuName: "编辑器",
    tip: "12",
    icon: "editor",
    children: [
      {
        menuUrl: "/editor/rich-text",
        menuName: "富文本",
      },
      {
        menuUrl: "/editor/markdown",
        menuName: "markdown",
      },
    ],
  },
  {
    menuUrl: "/other",
    menuName: "其它功能",
    children: [
      {
        menuUrl: "/other/print",
        menuName: "打印",
      },
      {
        menuUrl: "http://www.baidu.com",
        menuName: "外链",
      },
      {
        menuUrl: "/other/qrcode",
        menuName: "二维码",
      },
      {
        menuUrl: "/other/css-animation",
        menuName: "Css动画",
      },
    ],
  },
];

Mock.mock(baseAddress + "/getMenuList", function () {
  baseData.data = adminRoutes;
  return Mock.mock(baseData);
});
