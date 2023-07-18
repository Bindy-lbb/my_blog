module.exports = {
  title: '二狗编程',
  description: '二狗',
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "二狗的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn" },
          { text: "Github", link: "https://github.com" }
        ]
      }],

    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,  // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/blogs/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/blogs/1" },
          { title: "第二篇", path: "/blogs/2" },
        ]
      }
    ]
  }
}
