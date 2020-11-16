import { HTTP_LOCKED } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { LockedParams } from '../../definitions/exception-parameters/LockedParams'

/**
 * RFC 2518 (WebDAV) Section 10.4
 * The 423 (Locked) status code means the source or destination
 * resource of a method is locked.
 */
export class Locked extends HttpException {
  constructor (params?: LockedParams) {
    super(HTTP_LOCKED, { ...params })
    Object.setPrototypeOf(this, Locked.prototype)
  }
}
