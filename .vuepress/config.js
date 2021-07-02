// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/
// 配置教程：https://www.moyundong.com/frontend/vuepress/1%E4%BB%8B%E7%BB%8D.html

module.exports = {
  title: "East_White",
  description: "The road ahead is vast and expectable!",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "HTML/CSS", link: "/html-css/" },
      {
        text: "JS+ES+TS",
        items: [
          { text: "JS", link: "/javascript/js/" },
          { text: "ES", link: "/javascript/es/" },
          { text: "TS", link: "/javascript/ts/" }
        ]
      },
      { text: "Webpack", link: "/webpack/" },
      { text: "React", link: "/react/" },
      { text: "Flutter", link: "/flutter/" },
      { text: "Node", link: "/node/" },
      {
        text: "算法",
        items: [
          {
            text: "数据结构",
            link: "/data-structure-and-algorithm/data-structure/"
          },
          { text: "算法", link: "/data-structure-and-algorithm/algorithm/" }
        ]
      },
      {
        text: "GitHub",
        link: "https://github.com/ian-kevin126"
      }
    ]
  }
};
