import { CancelToken } from 'axios'

export class Resource {
  constructor({ client, methods = ['get'] }) {
    this._client = client
    this._tempRequests = []
    this._buildMethod(methods)
    this._buildDealy(methods)
  }

  async requestTemp() {
    const requests = this._tempRequests.map(({ method, config }) => {
      return this[method](config)
    })
    const responses = await Promise.all(requests)
    this.clearTempRequests()
    return responses
  }

  clearTempRequests() {
    this._tempRequests = []
  }

  _buildMethod(methodNames) {
    methodNames.forEach(methodName => {
      Object.defineProperty(this, methodName, {
        get() {
          return this._createMethod(methodName)
        },
      })
    })
  }

  /**
   * axios.request ベースのリクエストメソッドの生成
   * https://github.com/axios/axios#request-config
   *
   * @param {String} methodName
   * @returns {Function}
   */
  _createMethod(methodName) {
    return (async (args = {}) => {
      const response = await this._client
        .request({
          ...args,
          method: methodName,
        })
        .catch(err => err.response)
      return response
    }).bind(this)
  }

  _buildDealy(methodNames) {
    const methods = methodNames.reduce((methods, methodName) => {
      methods[methodName] = this._createDealyMethod(methodName)
      return methods
    }, {})

    Object.defineProperty(this, 'delay', {
      get() {
        return methods
      },
    })
  }

  _createDealyMethod(methodName) {
    return (async (config = {}) => {
      if (process.server) {
        return await this[methodName](config)
      }
      this._tempRequests.push({ method: methodName, config })
      return {}
    }).bind(this)
  }
}
