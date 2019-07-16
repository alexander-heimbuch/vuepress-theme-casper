const config = require('./data/config.json');

module.exports = Object.assign(config, {
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  }
});
