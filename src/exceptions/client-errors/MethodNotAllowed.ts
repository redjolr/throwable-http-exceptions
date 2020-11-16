import { HttpException } from '../../HttpException'
import { HTTP_METHOD_NOT_ALLOWED } from '../../http-error-codes'
import { MethodNotAllowedParams } from '../../definitions/exception-parameters/MethodNotAllowedParams'

/**
 * This error should be thrown, when the client sends a request
 * to a route that exists, but the method that was used for the request
 * is not allowed.
 *
 * Normally, in the the response, the server should include the 'Allow'
 * header, whose value should be the list of methods that the server
 * does allow for this route.
 */
export class MethodNotAllowed extends HttpException {
  constructor (params?: MethodNotAllowedParams) {
    const args = params?.allowedMethods && !params.headers?.Allow ?
      { ...params, headers: { Allow: params.allowedMethods.join(', ') } } :
      { ...params }

    super(HTTP_METHOD_NOT_ALLOWED, args)
    Object.setPrototypeOf(this, MethodNotAllowed.prototype)
  }
}
