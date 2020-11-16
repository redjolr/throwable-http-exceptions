import { HTTP_LENGTH_REQUIRED } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { LengthRequiredParams } from '../../definitions/exception-parameters/LengthRequiredParams'

/**
 * This error should be thrown to indicate that the server
 * refuses to accept the request without a defined Content-Length
 * (Section 3.3.2 of [RFC7230]).  The client MAY repeat the request if
 * it adds a valid Content-Length header field containing the length of
 * the message body in the request message.
 */
export class LengthRequired extends HttpException {
  constructor (params?: LengthRequiredParams) {
    super(HTTP_LENGTH_REQUIRED, { ...params })
    Object.setPrototypeOf(this, LengthRequired.prototype)
  }
}
