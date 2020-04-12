# Casper Theme

Ghosts default theme [Casper](https://github.com/TryGhost/Casper) for Vuepress.

## Create with Stackbit

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/alexander-heimbuch/vuepress-theme-casper)

## Installation

Install the npm package:

```bash
$ npm i vuepress-theme-casper --save
```

Adapt your vuepress config `config.js`:

```js
module.exports = {
  title: 'Theme Title',
  description: 'Theme description',
  base: '/',
  theme: 'casper',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
  themeConfig: {
    cover: '/images/cover.jpg',
    logo: '/images/logo.png',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts'
    }, {
      text: 'Category',
      link: '/category/some-category'
    }, {
      text: 'Page',
      link: '/a-page.html'
    }],

    footer: [{
      text: 'Latest Posts',
      link: '/posts'
    }, {
      text: 'Facebook',
      link: 'https://facebook.com/'
    }, {
      text: 'Twitter',
      link: 'https://twitter.com'
    }, {
      text: 'Github',
      link: 'https://github.com/'
    }],
    social: {
      github: 'https://github.com',
      twitter: 'https://twitter.com',
      facebook: 'https://facebook.com',
      xing: 'https://xing.de',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com'
    }
  }
}
```

## Page/Post Parameters

The following parameters are available:

```
---
title: And when we woke up, we had these bodies.
image: https://picsum.photos/1920/1080/?random&date=2018-04-15
publish: 2018-04-15
type: post|page
tags:
  - toe-tappingly tragic
  - thanks to the Internet
categories:
  - futurama
readingTime: 10 Minutes
---
```

The post intro uses the `<!-- more -->` tag.

## Caveats

* For simplicity this theme doesn't support multiple authors
