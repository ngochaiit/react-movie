const path = require('path')

module.exports = {
    exportPathMap() {
      return {
        '/': { page: '/' },
      }
    },
    webpack: (config) => {
        config.resolve.modules.push(path.resolve('./'))

        return config
      },
  }
