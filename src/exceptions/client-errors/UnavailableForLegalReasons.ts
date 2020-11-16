import { HTTP_UNAVAILABLE_FOR_LEGAL_REASONS } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { UnavailableForLegalReasonsParams } from '../../definitions/exception-parameters/UnavailableForLegalReasonsParams'
import { ExceptionParams } from '../../../src/definitions/exception-parameters/ExceptionParams'

/**
 * RFC 7725 Section 3
 * This error indicates that the server is denying access to the
 * resource as a consequence of a legal demand.
 *
 * Responses using this status code SHOULD include an explanation.
 * In this class you can do this using the optional parameter 'errors'.
 */
export class UnavailableForLegalReasons extends HttpException {
  constructor (params?: UnavailableForLegalReasonsParams) {
    const args: ExceptionParams = params?.errors && !params?.body ?
      { ...params, body: { errors: params?.errors } } :
      { ...params }


    super(HTTP_UNAVAILABLE_FOR_LEGAL_REASONS, args)
    Object.setPrototypeOf(this, UnavailableForLegalReasons.prototype)
  }
}
