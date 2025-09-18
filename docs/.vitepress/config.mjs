import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "Flask 学习笔记",
  description: "Flask Web框架学习指南 - 从入门到精通的完整教程",
  lang: 'zh-CN',
  base: '/flask-notes/',
  lastUpdated: true,
  
  // 添加head配置来指定favicon和其他meta信息
  head: [
    ['link', { rel: 'icon', href: '/flask-notes/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/flask-notes/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:title', content: 'Flask 学习笔记 | 全面的 Flask Web 框架学习指南' }],
    ['meta', { name: 'og:site_name', content: 'Flask 学习笔记' }],
    ['meta', { name: 'og:url', content: 'https://liuyanbioinfo.github.io/flask-notes/' }],
    ['meta', { name: 'og:description', content: 'Flask Web框架学习指南，从入门到精通的完整教程' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'Flask 学习笔记',
    
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 Flask教程', link: '/flask/' },
      { text: '🎯 大纲', link: '/flask/0. 大纲' }
    ],

    sidebar: {
      '/flask/': [
        {
          text: '📋 课程概览',
          collapsed: false,
          items: [
            { text: '🎯 大纲', link: '/flask/0. 大纲' }
          ]
        },
        {
          text: '🚀 第一部分：基础入门',
          collapsed: false,
          items: [
            { text: '1. 引言与概述', link: '/flask/1. 引言与概述' },
            { text: '2. 开发环境与工具链', link: '/flask/2. 开发环境与工具链' },
            { text: '3. Flask核心概念', link: '/flask/3. Flask核心概念' }
          ]
        },
        {
          text: '⚡ 第二部分：核心功能开发',
          collapsed: false,
          items: [
            { text: '4. 模版引擎与前端集成', link: '/flask/4. 模版引擎与前端集成' },
            { text: '5. 表单处理与数据验证', link: '/flask/5. 表单处理与数据验证' },
            { text: '6. 数据库设计与ORM', link: '/flask/6. 数据库设计与ORM' },
            { text: '7. 用户认证与权限管理', link: '/flask/7. 用户认证与权限管理' }
          ]
        },
        {
          text: '🏗️ 第三部分：高级特性与架构',
          collapsed: false,
          items: [
            { text: '8. API开发与微服务', link: '/flask/8. API开发与微服务' },
            { text: '9. 应用架构与模块化', link: '/flask/9. 应用架构与模块化' },
            { text: '10. 错误处理与监控', link: '/flask/10. 错误处理与监控' }
          ]
        },
        {
          text: '🧪 第四部分：测试与质量保证',
          collapsed: false,
          items: [
            { text: '11. 测试策略与实施', link: '/flask/11. 测试策略与实施' },
            { text: '12. 代码质量与规范', link: '/flask/12. 代码质量与规范' }
          ]
        },
        {
          text: '🚀 第五部分：部署与运维',
          collapsed: false,
          items: [
            { text: '13. 部署策略与环境管理', link: '/flask/13. 部署策略与环境管理' },
            { text: '14. 云平台部署', link: '/flask/14. 云平台部署' },
            { text: '15. 安全与性能优化', link: '/flask/15. 安全与性能优化' }
          ]
        },
        {
          text: '💼 第六部分：实战项目与进阶',
          collapsed: false,
          items: [
            { text: '16. 综合项目实战', link: '/flask/16. 综合项目实战' },
            { text: '17. 生态系统与扩展', link: '/flask/17. 生态系统与扩展' },
            { text: '18. 职业发展与最佳实践', link: '/flask/18. 职业发展与最佳实践' }
          ]
        },
        {
          text: '📖 附录资源',
          collapsed: true,
          items: [
            { text: '附录', link: '/flask/附录' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liuyanbioinfo/flask-notes' }
    ],
    
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-present Liu Yan'
    },
    
    // 搜索功能
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
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
      level: [2, 3, 4],
      label: '本页目录'
    },
    
    // 上一页/下一页
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 返回顶部
    returnToTopLabel: '返回顶部',
    
    // 侧边栏菜单标签
    sidebarMenuLabel: '菜单',
    
    // 深色模式切换标签
    darkModeSwitchLabel: '主题',
    
    // 语言切换标签
    langMenuLabel: '多语言',
    
    // 外部链接图标
    externalLinkIcon: true
  },
  
  // 添加 markdown 配置
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    config: (md) => {
      // 可以在这里添加 markdown-it 插件
    }
  },
  
  // 添加 vite 配置优化
  vite: {
    optimizeDeps: {
      exclude: ['vitepress']
    },
    ssr: {
      noExternal: ['vitepress-plugin-mermaid']
    }
  }
}))
