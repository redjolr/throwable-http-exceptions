import { HttpException } from '../../HttpException'
import { HTTP_RANGE_NOT_SATISFIABLE } from '../../http-error-codes'
import { RangeNotSatisfiableParams } from '../../definitions/exception-parameters/RangeNotSatisfiableParams'

/**
 * This error should be thrown when the range specified by the request's 'Range' header
 * field in the request can't be satisfied. Some cases when the ranges cant be satisifed are:
 *
 * 1- None of the ranges specified overlap with the total range of the resource
 * 2- The set of ranges is invalid
 * 3- Too many small ranges have been requested
 *
 * For byte ranges, the server should send a 'Content-Range' header field specifying the
 * current length of the selected representation.
 *
 * To properly format a 'Content-Range' header, read: https://tools.ietf.org/html/rfc7233#section-4.2
 *
 * In this class, the params.ContentRangeHeader parameter sets the 'ContentRange' header.
 */
export class RangeNotSatisfiable extends HttpException {
  constructor (params?: RangeNotSatisfiableParams) {
    const args = params?.ContentRangeHeader && !params?.headers?.['Content-Range'] ?
      { ...params, headers: { ...params.headers, 'Content-Range': params.ContentRangeHeader } } :
      { ...params }

    super(HTTP_RANGE_NOT_SATISFIABLE, args)
    Object.setPrototypeOf(this, RangeNotSatisfiable.prototype)
  }
}


