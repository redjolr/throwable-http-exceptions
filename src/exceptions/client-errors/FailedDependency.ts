import { HTTP_FAILED_DEPENDENCY } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { FailedDependencyParams } from '../../definitions/exception-parameters/FailedDependencyParams'

/**
 * RFC 2518 (WebDAV) Section 10.5
 * This error means that the method could
 * not be performed on the resource because the requested action
 * depended on another action and that action failed.
 */
export class FailedDependency extends HttpException {
  constructor (params?: FailedDependencyParams) {
    super(HTTP_FAILED_DEPENDENCY, { ...params })
    Object.setPrototypeOf(this, FailedDependency.prototype)
  }
}
