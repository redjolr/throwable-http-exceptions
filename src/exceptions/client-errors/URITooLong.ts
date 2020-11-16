
import { HttpException } from '../../HttpException'
import { HTTP_URI_TOO_LONG } from '../../http-error-codes'
import { URITooLongParams } from '../../definitions/exception-parameters/URITooLongParams'

/**
 * As the name suggests, this error should be thrown when the
 * URI of the request is too long.
 */
export class URITooLong extends HttpException {
  constructor (params?: URITooLongParams) {
    super(HTTP_URI_TOO_LONG, { ...params })

    Object.setPrototypeOf(this, URITooLong.prototype)
  }
}

