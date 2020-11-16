import { HTTP_PRECONDITION_FAILED } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { PreconditionFailedParams } from '../../definitions/exception-parameters/PreconditionFailedParams'

/**
 * According to RFC 7232:
 *
 * The 412 (Precondition Failed) status code indicates that one or more
 * conditions given in the request header fields evaluated to false when
 * tested on the server.  This response code allows the client to place
 * preconditions on the current resource state (its current
 * representations and metadata) and, thus, prevent the request method
 * from being applied if the target resource is in an unexpected state.
 *
 */
export class PreconditionFailed extends HttpException {
  constructor (args?: PreconditionFailedParams) {
    super(HTTP_PRECONDITION_FAILED, { ...args })
    Object.setPrototypeOf(this, PreconditionFailed.prototype)
  }
}
