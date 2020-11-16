import { HTTP_BAD_REQUEST } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { BadRequestParams } from '../../definitions/exception-parameters/BadRequestParams'
import { ExceptionParams } from 'src/definitions/exception-parameters/ExceptionParams'

/**
 * Indicates that the server cannot or will not process the request due
 * to something that is perceived to be a client error (e.g., malformed
 * request syntax, invalid request  message framing, or deceptive request
 * routing).
 */
export class BadRequestException extends HttpException {
  constructor (params?: BadRequestParams) {

    const args: ExceptionParams = params?.errors && !params?.body ?
      { ...params, body: { errors: params?.errors } } :
      { ...params }

    super(HTTP_BAD_REQUEST, args)
    Object.setPrototypeOf(this, BadRequestException.prototype)
  }
}
