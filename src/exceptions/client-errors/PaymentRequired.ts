import { HttpException } from '../../HttpException'
import { HTTP_PAYMENT_REQUIRED } from '../../http-error-codes'
import { PaymentRequiredParams } from '../../definitions/exception-parameters/PaymentRequiredParams'

export class PaymentRequired extends HttpException {
  constructor (args?: PaymentRequiredParams) {
    super(HTTP_PAYMENT_REQUIRED, { ...args })
    Object.setPrototypeOf(this, PaymentRequired.prototype)
  }
}
