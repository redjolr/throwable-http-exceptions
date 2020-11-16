import { HttpException } from '../../HttpException'
import { HTTP_SERVICE_UNAVAILABLE } from '../../http-error-codes'
import { InternalServerErrorParams } from '../../definitions/exception-parameters/InternalServerErrorParams'

export class ServiceUnavailableException extends HttpException {
  constructor (args?: InternalServerErrorParams) {
    super(HTTP_SERVICE_UNAVAILABLE, { ...args })
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype)
  }
}
