
import { HTTP_HTTP_VERSION_NOT_SUPPORTED } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { HTTPVersionNotSupportedParams } from '../../definitions/exception-parameters/HTTPVersionNotSupportedParams'

export class HTTPVersionNotSupportedException extends HttpException {
  constructor (args?: HTTPVersionNotSupportedParams) {
    super(HTTP_HTTP_VERSION_NOT_SUPPORTED, { ...args })
    Object.setPrototypeOf(this, HTTPVersionNotSupportedException.prototype)
  }
}
