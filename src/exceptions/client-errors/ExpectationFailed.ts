import { HttpException } from '../../HttpException'
import { ExpectationFailedParams } from '../../definitions/exception-parameters/ExpectationFailedParams'
import { HTTP_EXPECTATION_FAILED } from '../../http-error-codes'

/**
 * RFC 7231 Section 6.5.14
 *
 * The 417 (Expectation Failed) status code indicates that the
 * expectation given in the request's Expect header field
 * (Section 5.1.1) could not be met by at least one of the inbound
 * servers.
 */
export class ExpectationFailed extends HttpException {
  constructor (params?: ExpectationFailedParams) {
    super(HTTP_EXPECTATION_FAILED, { ...params })
    Object.setPrototypeOf(this, ExpectationFailed.prototype)
  }
}
