export class HttpError extends Error {
  /**
   * @type { number}
   */
  status
  /**
   * @type { number}
   */
  info
  /**
   * @type { string}
   */
  statusText

  /**
   *
   * @param {import('../types/IHttpError.type').IHttpError} errorInfo
   */
  constructor(errorInfo) {
    const { status, statusText, info } = errorInfo
    super(`${statusText}(${status})`)
    this.status = status
    this.info = info
    this.statusText = statusText

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
