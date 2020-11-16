import { HttpException } from '../../HttpException'
import { ImATeapotParams } from '../../definitions/exception-parameters/ImATeapotParams'
import { HTTP_IM_A_TEAPOT } from '../../http-error-codes'

/**
 * This is an HTTP error specified by the Engineering Task Force in the
 * RFC 2324 as an April's fool joke.
 *
 * It was only created to poke fun at many bad HTTP extensions that had been
 * proposed at the time. Don't use this in practice (unless you want to use
 * it as a joke too).
 */
export class ImATeapot extends HttpException {
  constructor (params?: ImATeapotParams) {
    super(HTTP_IM_A_TEAPOT, { ...params })
    Object.setPrototypeOf(this, ImATeapot.prototype)
  }
}
