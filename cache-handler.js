const fs = require('fs')
const path = require('path')

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options
    this.cacheDirectory = path.join(options.dir, '.next/cache')
  }

  async get(key) {
    const cacheFile = path.join(this.cacheDirectory, key)
    try {
      return JSON.parse(await fs.promises.readFile(cacheFile, 'utf8'))
    } catch (error) {
      return null
    }
  }

  async set(key, data) {
    const cacheFile = path.join(this.cacheDirectory, key)
    try {
      await fs.promises.mkdir(path.dirname(cacheFile), { recursive: true })
      await fs.promises.writeFile(cacheFile, JSON.stringify(data))
    } catch (error) {
      console.error('Error writing to cache:', error)
    }
  }
}

