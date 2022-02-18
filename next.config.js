const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  images: {
    domains: ['static.xx.fbcdn.net', "firebasestorage.googleapis.com", "logos-world.net", "lh3.googleusercontent.com", "www.businessplatform.ae", "encrypted-tbn0.gstatic.com"]
  }
})
