import { HttpException } from '../../HttpException'
import { HTTP_INTERNAL_SERVER_ERROR } from '../../http-error-codes'
import { InternalServerErrorParams } from '../../definitions/exception-parameters/InternalServerErrorParams'

export class InternalServerError extends HttpException {
  constructor (args?: InternalServerErrorParams) {
    super(HTTP_INTERNAL_SERVER_ERROR, { ...args })
    Object.setPrototypeOf(this, InternalServerError.prototype)
  }
}
