import { HTTP_GONE } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { GoneParams } from '../../definitions/exception-parameters/GoneParams'

/**
 * This error should be thrown when you must indicate that access to
 * the target resource is no longer available. If it can't be
 * determined whether the unavailability is permanent or not, then
 * the NotFound error should be thrown instead.
 */
export class Gone extends HttpException {
  constructor (params?: GoneParams) {
    super(HTTP_GONE, { ...params })
    Object.setPrototypeOf(this, Gone.prototype)
  }
}
