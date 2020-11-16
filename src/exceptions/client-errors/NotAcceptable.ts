import { HttpException } from '../../HttpException'
import { HTTP_NOT_ACCEPTABLE } from '../../http-error-codes'
import * as mimes from 'mime-types'
import { MimeSubType } from 'src/enums/mime-subtype.enum'
import { NotAcceptableParams } from '../../definitions/exception-parameters/NotAcceptableParams'

/**
 * This error should be thrown when the server cannot respond to
 * the client with the representation that it asked for, by using
 * the proactive negotiation headers. These headers may be:
 * Accept, Accept-Charset, Accept-Encoding and Accept-Language.
 *
 * The server's response body should have a list of the
 * representations that it supports.
 *
 * Here, You can use the 'acceptable' optional argument to specify a list
 * of reasons. This will be parsed as a JSON object and will be written
 * in the response body.
 *
 * Alternatively, you can make a custom body yourself and pass it as an
 * argument.
 */
export class NotAcceptable extends HttpException {
  constructor (params?: NotAcceptableParams) {
    const args = params?.acceptable && !params?.body ?
      {
        ...params,
        body: {
          acceptable: params.acceptable
            .map((mst: MimeSubType) => mimes.lookup(mst)),
        },
      } :
      { ...params }

    super(HTTP_NOT_ACCEPTABLE, args)
    Object.setPrototypeOf(this, NotAcceptable.prototype)
  }
}
