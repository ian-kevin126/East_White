// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/
// 配置教程：https://www.moyundong.com/frontend/vuepress/1%E4%BB%8B%E7%BB%8D.html
// Markdown语法：https://www.jianshu.com/p/191d1e21f7ed

module.exports = {
  title: "East_White",
  description: "The road ahead is vast and expectable!",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "HTML/CSS",
        items: [
          { text: "HTML", link: "/HTML/" },
          { text: "CSS", link: "/CSS/" }
        ]
      },
      {
        text: "JS+ES+TS",
        items: [
          { text: "JavaScript", link: "/JavaScript/" },
          { text: "ECMAScript", link: "/ECMAScript/" },
          { text: "TypeScript", link: "/TypeScript/" }
        ]
      },
      { text: "Webpack", link: "/Webpack/" },
      { text: "React", link: "/React/" },
      { text: "Flutter", link: "/Flutter/" },
      { text: "Node", link: "/Node/" },
      {
        text: "算法",
        items: [
          { text: "数据结构", link: "/DataStructures/" },
          { text: "算法", link: "/Algorithms/" }
        ]
      },
      {
        text: "GitHub",
        link: "https://github.com/ian-kevin126"
      }
    ],
    sidebar: {
      "/Webpack/": [
        {
          title: "webpack",
          collapsable: true,
          childres: [{ title: "1111", path: "/Webpack/111" }]
        }
      ]
    },
    sidebarDepth: 2, //左侧导航显示的层级
    lastUpdated: "Last Updated"
  }
};
