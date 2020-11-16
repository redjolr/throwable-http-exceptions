import { HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { RequestHeaderFieldsTooLargeParams } from '../../definitions/exception-parameters/RequestHeaderFieldsTooLargeParams'
import { ExceptionParams } from '../../../src/definitions/exception-parameters/ExceptionParams'

/**
 * RFC 6585 Section 5
 *
 * This error indicates that the server is unwilling to process the
 * request because its header fields are too large.  The request MAY
 * be resubmitted after reducing the size of the request header fields.
 *
 */
export class RequestHeaderFieldsTooLarge extends HttpException {
  constructor (params?: RequestHeaderFieldsTooLargeParams) {
    const args: ExceptionParams = params?.errors && !params?.body ?
      { ...params, body: { errors: params?.errors } } :
      { ...params }


    super(HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE, args)
    Object.setPrototypeOf(this, RequestHeaderFieldsTooLarge.prototype)
  }
}
