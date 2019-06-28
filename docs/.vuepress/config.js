module.exports = {
    title: 'Seed-UI',
    description: '一个简单的UI组件库',
    // base: '/seed-ui/',
    themeConfig: {
      nav: [{
          text: '首页',
          link: '/'
        },
        {
          text: '文档',
          link: '/install/'
        },
        {
          text: '代码仓库',
          link: 'https://github.com/SethLee23/seed-ui'
        },
      ],
      sidebar: [{
          title: '入门',
          collapsable: false,
          children: ['/install/', '/get-started/']
        },
        {
          title: '组件',
          collapsable: false,
        //   children: ['/compo/button','/compo/grid','/compo/collapse']
          children: ['/compo/button','/compo/grid','/compo/collapse']
        },
      ]
    },
    markdown: {
      lineNumbers: true,
    },
  }