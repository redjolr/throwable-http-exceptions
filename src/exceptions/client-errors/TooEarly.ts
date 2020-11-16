import { HTTP_TOO_EARLY } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { TooEarlyParams } from '../../definitions/exception-parameters/TooEarlyParams'

/**
 * RFC 8470 Section 5.2.
 * This error should be thrown when the server suscpects that the
 * request is replayed and it is unwilling to process the request.
 */
export class TooEarly extends HttpException {
  constructor (params?: TooEarlyParams) {
    super(HTTP_TOO_EARLY, { ...params })
    Object.setPrototypeOf(this, TooEarly.prototype)
  }
}
