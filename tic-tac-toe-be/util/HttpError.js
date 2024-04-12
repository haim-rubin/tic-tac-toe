import httpStatus from 'http-status'

export class HttpError extends Error {
  /** @type {number} */
  httpStatusCode
  /** @type {string} */
  code
  /** @type {string} */
  httpStatusText

  /** @type {Array} */
  details
  constructor({
    httpStatusCode,
    code,
    httpStatusText,    
  } ) {
    super(`${code || httpStatus[httpStatusCode]}`)
    this.httpStatusCode = httpStatusCode
    this.code = code
    this.httpStatusText = httpStatusText    
    
  }

  /**
   *
   * @param {object} instance
   * @returns {boolean}
   */
  static isInstanceOf(instance) {
    return instance instanceof HttpError
  }
}