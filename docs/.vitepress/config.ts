import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN', // <html lang="en-US">
  title: 'Jianjun Yu',
  titleTemplate: '一个不入流的切图仔～',
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
    siteTitle: 'Yu', // 您可以自定义此项以替换导航中的默认站点标题（应用配置中的标题）。
    // nav: [...],
    // sidebar: { ... }
  },
});
