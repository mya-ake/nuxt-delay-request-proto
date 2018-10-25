import { CancelToken } from 'axios'

export class Resource {
  constructor({ client, methods = ['get'] }) {
    this._client = client
    this._buildMethod(methods)
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
}
