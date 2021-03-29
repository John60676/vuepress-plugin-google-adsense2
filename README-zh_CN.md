# vuepress-plugin-google-adsense2

[English](./README.md) | 简体中文

> 注意: 这个插件是提供给 **VuePress 2** 版本的

VuePress 2 的 [Google adsense](https://www.google.com/adsense) 插件, 自动帮你在你的 VuePress 站点上添加[谷歌广告](https://support.google.com/adsense/answer/9261306)。

[![npm](https://img.shields.io/npm/v/vuepress-plugin-google-adsense2.svg)](https://www.npmjs.com/package/vuepress-plugin-google-adsense2) [![GitHub license](https://img.shields.io/github/license/John60676/vuepress-plugin-google-adsense2.svg)](https://github.com/John60676/vuepress-plugin-google-adsense2/blob/master/LICENSE)

## 安装

```sh
yarn add -D vuepress-plugin-google-adsense2
# 或者
npm install -D vuepress-plugin-google-adsense2
```

## 用法

```js
module.exports = {
  plugins: [
    [
      'vuepress-plugin-google-adsense2',
      {
        id: 'ca-pub-xxxxxxx',
      },
    ],
  ],
};
```

更多插件的使用方式，请参考 [VuePress Plugins](https://vuepress2.netlify.app/reference/plugin-api.html#plugins)

## 选项

### id

- 类型: `string`

- 详情:

  在 AdSense 提供给你的代码块中，找到 `'data-ad-client'` 一词。 `id` 应该以`'ca-pub-'`开头。 你可以按照[此处](https://support.google.com/adsense/answer/7584263?hl=zh_CN)的说明查找 AdSense 代码。

  亦或者你可以使用 **发布商 ID** 并在前面加上 `'ca-'` 字符串，来组合成 `id`。你可以按照[此处](https://support.google.com/adsense/answer/105516?hl=zh-hans)的说明查找 AdSense **发布商 ID**。
