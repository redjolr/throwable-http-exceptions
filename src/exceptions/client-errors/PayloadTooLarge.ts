import { HTTP_PAYLOAD_TOO_LARGE } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { PayloadTooLargeParams } from '../../definitions/exception-parameters/PayloadTooLargeParams'
import { retryAfter } from '../../utils/headers'

/**
 * RFC 7231 Section 6.5.11.
 * This error should be thrown when the payload of the request is too large.
 *
 * If the condition is temporary, the server SHOULD generate a
 * Retry-After header field to indicate that it is temporary and after
 * what time the client MAY try again.
 *
 * A Retry-After header may be a specific date in the future (which you can
 * set with the params.retryAfterDate parameter), or the number
 * of seconds that the client has to wait until it tries again (which you can
 * set with the params.retryAfterSeconds parameter)
 *
 * Examples of Retry-After:
 *
 * 1- Retry-After: Fri, 23 Oct 2015 15:28:02 GMT
 * 2- Retry-After: 120
 */
export class PayloadTooLarge extends HttpException {
  constructor (params?: PayloadTooLargeParams) {
    const args = params ? { ...params } : {}

    if (params?.retryAfterDate) {
      args.headers = {
        'Retry-After': retryAfter(params.retryAfterDate),
        ...params.headers ? params.headers : {},
      }
    } else if (params?.retryAfterSeconds && !params.headers?.['Retry-After']) {
      args.headers = {
        'Retry-After': params.retryAfterSeconds,
        ...params.headers ? params.headers : {},
      }
    }

    super(HTTP_PAYLOAD_TOO_LARGE, args)
    Object.setPrototypeOf(this, PayloadTooLarge.prototype)
  }
}
