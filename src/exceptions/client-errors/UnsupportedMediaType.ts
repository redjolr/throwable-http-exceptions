
import { HttpException } from '../../HttpException'
import { HTTP_UNSUPPORTED_MEDIA_TYPE } from '../../http-error-codes'
import { UnsupportedMediaTypeParams } from '../../definitions/exception-parameters/UnsupportedMediaTypeParams'

/**
 * RFC 7231 Section 6.5.13
 *
 * The 415 (Unsupported Media Type) status code indicates that the
 * origin server is refusing to service the request because the payload
 * is in a format not supported by this method on the target resource.
 * The format problem might be due to the request's indicated
 * Content-Type or Content-Encoding, or as a result of inspecting the
 * data directly.
 */
export class UnsupportedMediaType extends HttpException {
  constructor (params?: UnsupportedMediaTypeParams) {
    super(HTTP_UNSUPPORTED_MEDIA_TYPE, { ...params })

    Object.setPrototypeOf(this, UnsupportedMediaType.prototype)
  }
}

