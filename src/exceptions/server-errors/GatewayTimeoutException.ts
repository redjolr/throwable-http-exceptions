import { HttpException } from '../../HttpException'
import { HTTP_GATEWAY_TIMEOUT } from '../../http-error-codes'
import { GatewayTimeoutParams } from '../../definitions/exception-parameters/GatewayTimeoutParams'

export class GatewayTimeoutException extends HttpException {
  constructor (args?: GatewayTimeoutParams) {
    super(HTTP_GATEWAY_TIMEOUT, { ...args })
    Object.setPrototypeOf(this, GatewayTimeoutException.prototype)
  }
}
