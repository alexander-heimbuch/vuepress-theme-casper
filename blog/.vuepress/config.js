module.exports = {
  title: 'Casper Theme',
  description: 'Ghosts default theme for Vuepress',
  base: '/vuepress-theme-casper/',
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
    cover: 'cover.jpg',
    logo: '/logo.png',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts'
    }, {
      text: 'Futurama',
      link: '/category/futurama'
    }, {
      text: 'Dexter',
      link: '/category/dexter'
    }, {
      text: 'About',
      link: '/about.html'
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
      link: 'https://github.com/vuepress-theme-casper'
    }],
    social: {
      github: 'https://github.com/alexander-heimbuch/vuepress-theme-casper',
      twitter: 'https://twitter.com/zusatzstoff'
    }
  }
}
