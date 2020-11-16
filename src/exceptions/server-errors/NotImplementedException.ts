import { HttpException } from '../../HttpException'
import { HTTP_NOT_IMPLEMENTED } from '../../http-error-codes'
import { NotImplementedParams } from '../../definitions/exception-parameters/NotImplementedParams'

export class NotImplementedException extends HttpException {
  constructor (args?: NotImplementedParams) {
    super(HTTP_NOT_IMPLEMENTED, { ...args })
    Object.setPrototypeOf(this, NotImplementedException.prototype)
  }
}
