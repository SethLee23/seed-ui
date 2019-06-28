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
          text: '交流',
          link: 'https://github.com/SethLee23'
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
          children: ['/compo/button']
        },
      ]
    },
    markdown: {
      lineNumbers: true,
    },
  }