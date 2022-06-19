---
layout: home
head:
  - - meta
    - name: description
      content: 个人网站、博客
  - - meta
    - name: keywords
      content: yujianjun 博客 网站 前段 
# editLink: true

# hero:
#   name: [An image](./javascript.gif)
#   text: 如何成为前端架构师？
#   tagline: 技术记录
#   actions:
#     - theme: brand
#       text: Get Started
#       link: /guide/what-is-vitepress
#     - theme: alt
#       text: View on GitHub
#       link: https://github.com/vuejs/vitepress

# features:
#   - icon: ⚡️
#     title: Vite, The DX that can't be beat
#     details: Lorem ipsum...
#   - icon: 🖖
#     title: Power of Vue meets Markdown
#     details: Lorem ipsum...
#   - icon: 🛠️
#     title: Simple and minimal, always
#     details: Lorem ipsum...

---

<!-- asd -->
<!-- <script setup>
import { withBase, useData } from 'vitepress'

const { theme } = useData()
</script>
<template>
  <img :src="withBase(theme.logoPath)" />
</template>
<style>
    img {
        width: 80%
    }
</style> -->

<!-- <style>
    .aside {
        /* width: 80% */
        display: none;
    }
</style> -->

<script setup>
import Home from './components/Home.vue'
// import { useData,  } from 'vitepress'

// const { page } = useData()
</script>

<!-- <pre>{{ page }}</pre> -->

<!-- 
::: v-pre
`{{ This will be displayed as-is }}`
::: -->



<Home>
    <img src="./public/Javascript.gif" style="width: 640px;margin: 20px auto 50px;"/>

[流程和规范化](./%E6%B5%81%E7%A8%8B%E5%92%8C%E8%A7%84%E8%8C%83%E5%8C%96.md)

</Home>