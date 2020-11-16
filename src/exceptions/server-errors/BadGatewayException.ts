import { HttpException } from '../../HttpException'
import { HTTP_BAD_GATEWAY } from '../../http-error-codes'
import { BadGatewayExceptionParams } from '../../definitions/exception-parameters/BadGatewayExceptionParams'

export class BadGatewayException extends HttpException {
  constructor (args?: BadGatewayExceptionParams) {
    super(HTTP_BAD_GATEWAY, { ...args })
    Object.setPrototypeOf(this, BadGatewayException.prototype)
  }
}
