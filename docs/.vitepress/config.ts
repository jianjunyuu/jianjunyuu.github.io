import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN', // <html lang="en-US">
  title: 'Jianjun Yu',
  titleTemplate: false,
  description: '个人网站',

  base: '/',
  appearance: true, // Whether to enable "Dark Mode" or not. Default: true
  lastUpdated: true, // Use git commit to get the timestamp. Default: false

  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },

  // Theme related configurations.
  themeConfig: {
    // logo: '/logo.svg',
    siteTitle: 'Jianjun Yu', // 您可以自定义此项以替换导航中的默认站点标题（应用配置中的标题）。
    // nav: [...],
    // sidebar: { ... }
    socialLinks: [{ icon: 'github', link: 'https://github.com/jianjunyuu' }],
    editLink: {
      pattern: 'https://github.com/jianjunyuu/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdatedText: 'Updated Date',
    // nav: [
    //   { text: 'Guide', link: '/guide' },
    //   {
    //     text: 'Dropdown Menu',
    //     items: [
    //       { text: 'Item A', link: '/item-1' },
    //       { text: 'Item B', link: '/item-2' },
    //       { text: 'Item C', link: '/item-3' },
    //     ],
    //   },
    // ],
    // sidebar: [
    //   {
    //     text: 'Guide',
    //     items: [
    //       { text: 'Introduction', link: '/introduction' },
    //       { text: 'Getting Started', link: '/getting-started' },
    //       // ...
    //     ],
    //   },
    //   {
    //     text: 'Guide',
    //     items: [
    //       { text: 'Introduction', link: '/introduction' },
    //       { text: 'Getting Started', link: '/getting-started' },
    //       // ...
    //     ],
    //   },
    // ],
    footer: {
      message: '真正的旅程……不是造访异地，而是通过别人的眼睛来看这个世界。',
      copyright: ' —— 普鲁斯特（Marcel Proust）',
    },
  },
});
