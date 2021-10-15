const withPWA = require('next-pwa')

module.exports = withPWA({
  poweredByHeader: false,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
})
