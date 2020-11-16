import { HTTP_PRECONDITION_REQUIRED } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { PreconditionRequiredParams } from '../../definitions/exception-parameters/PreconditionRequiredParams'
import { ExceptionParams } from '../../../src/definitions/exception-parameters/ExceptionParams'

/**
 * RFC 6585 Section 3
 *  The 428 status code indicates that the server requires the
 * request to be conditional.
 *
 * Responses using this status code SHOULD explain how to resubmit the
 * request successfully.  For example:
 *
 * {
 *    "errors": []
 * }
 *
 */
export class PreconditionRequired extends HttpException {
  constructor (params?: PreconditionRequiredParams) {

    const args: ExceptionParams = params?.body ?
      { ...params } :
      {
        ...params,
        body: {
          ...params?.preconditions ?
            { preconditions: params.preconditions } :
            {},
          ...params?.instructions ? { instructions: params.instructions } : {},
        },
      }


    super(HTTP_PRECONDITION_REQUIRED, args)
    Object.setPrototypeOf(this, PreconditionRequired.prototype)
  }
}
