import { HttpException } from '../../HttpException'
import { MisdirectedRequestParams } from '../../definitions/exception-parameters/MisdirectedRequestParams'
import { HTTP_MISDIRECTED_REQUEST } from '../../http-error-codes'

/**
 * RFC 7540 Section 9.1.2
 *
 * This error indicates that the request was directed at a server
 * that is not able to produce a response. This can be sent by a
 * server that is not configured to produce responses for the
 * combination of scheme and authority that are included in the
 * request URI.
 */
export class MisdirectedRequest extends HttpException {
  constructor (params?: MisdirectedRequestParams) {
    super(HTTP_MISDIRECTED_REQUEST, { ...params })
    Object.setPrototypeOf(this, MisdirectedRequest.prototype)
  }
}
