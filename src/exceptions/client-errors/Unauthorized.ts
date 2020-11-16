import { HttpException } from '../../HttpException'
import { HTTP_UNAUTHORIZED } from '../../http-error-codes'
import { UnauthorizedParams } from '../../definitions/exception-parameters/UnauthorizedParams'

/**
 * This error is thrown when the user needs to be authenticated. The name
 * of this error is incorrectly defined. In information security theory,
 * Authentication is the process of identifying yourself. Authorization
 * is the process of granting permissions for a given entity / resource.
 *
 * The Unauthorized error as defined by HTTP specification, means that
 * either the client has not sent authentication credentials, or has
 * sent wrong ones. This is the process of Authentication and not
 * Authorization.
 *
 * An UnauthorizedException must include a WWW-Authenticate header.
 * See https://tools.ietf.org/html/rfc7235#section-4.1 for a description
 * of this header.
 *
 * You can set this header, either through the WWWAuthenticateHeader header,
 * or by manually setting it in the ExceptionHeaders argument.
 */
export class Unauthorized extends HttpException {
  constructor (params?: UnauthorizedParams) {
    const args =
      params?.WWWAuthenticateHeader && !params?.headers?.WWWAuthenticateHeader ?
        {
          ...params,
          headers: {
            ...params.headers,
            'WWW-Authenticate': params.WWWAuthenticateHeader,
          },
        } :
        { ...params }

    super(HTTP_UNAUTHORIZED, args)
    Object.setPrototypeOf(this, Unauthorized.prototype)
  }
}
