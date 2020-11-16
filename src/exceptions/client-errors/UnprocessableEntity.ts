import { HttpException } from '../../HttpException'
import { UnprocessableEntityParams } from '../../definitions/exception-parameters/UnprocessableEntityParams'
import { HTTP_UNPROCESSABLE_ENTITY } from '../../http-error-codes'

/**
 * RFC 2518 (WebDAV) Section 10.3
 *
 * This error means the server understands the content type of the
 * request entity (hence a 415(Unsupported Media Type) status code
 * is inappropriate), and the syntax of the request entity is correct
 * (thus a 400 (Bad Request) status code is inappropriate) but was
 * unable to process the contained instructions.  For example, this
 * error condition may occur if an XML request body contains well-formed
 * (i.e., syntactically correct), but semantically erroneous XML instructions.
 *
 * The response body may contain a list of errors. In this class, you can pass
 * an array of strigs to the 'errors' optional parameter. If this parameter is
 * passed the response body will be formated like the following example:
 *
 * {
 *    "errors": ["Some error string 1", "Some error string 2"]
 * }
 */
export class UnprocessableEntity extends HttpException {
  constructor (params?: UnprocessableEntityParams) {
    const args: UnprocessableEntityParams = params?.errors && !params?.body ?
      { ...params, body: { errors: params?.errors } } :
      { ...params }
    super(HTTP_UNPROCESSABLE_ENTITY, args)
    Object.setPrototypeOf(this, UnprocessableEntity.prototype)
  }
}
