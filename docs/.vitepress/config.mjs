import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "Flask 学习笔记",
  description: "Flask Web框架学习指南",
  lang: 'zh-CN',
  base: '/flask-notes/',  // 添加这行配置
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'Flask 学习笔记',
    
    nav: [
      { text: '首页', link: '/' },
      { text: 'Flask教程', link: '/flask/' },
      /*{ text: '示例代码', link: '/examples/' },*/
    ],

    sidebar: [
      {
        text: 'Flask教程',
        items: [
          { text: '大纲', link: '/flask/0. 大纲' },
          { text: '引言', link: '/flask/1. 引言' },
          { text: '环境设置与安装', link: '/flask/2. 环境设置与安装' },
          { text: 'Flask 基础概念', link: '/flask/3. Flask 基础概念' },
          { text: '模板引擎：Jinja2', link: '/flask/4. 模板引擎：Jinja2' },
          { text: '表单处理', link: '/flask/5. 表单处理' },
          { text: '数据库集成', link: '/flask/6. 数据库集成' },
          { text: '用户认证和会话管理', link: '/flask/7. 用户认证和会话管理 的内容' },
          { text: '错误处理和调试', link: '/flask/8. 错误处理和调试' },
          { text: '进阶主题', link: '/flask/9. 进阶主题' },
          { text: '部署和生产环境', link: '/flask/10. 部署和生产环境' },
          { text: '最佳实践和总结', link: '/flask/11. 最佳实践和总结' },
          { text: '附录', link: '/flask/12. 附录' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liuyanbioinfo/flask-notes' }
    ],
    
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-present'
    },
    
    // 搜索功能
    search: {
      provider: 'local'
    },
    
    // 外观切换
    appearance: {
      toggleSwitch: true
    },
    
    // 最后更新时间
    lastUpdatedText: '最后更新于',
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/liuyanbioinfo/flask-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 导航栏
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    
    // 上一页/下一页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
}))
