import { HttpException } from '../../HttpException'
import { HTTP_UNAUTHORIZED } from '../../http-error-codes'
import { RequestTimeoutParams } from '../../definitions/exception-parameters/RequestTimeoutParams'

/**
 * The server raises this error when the request that the client is
 * supposed to send, is taking too long. After a TCP handshake, the
 * server expects the client to send a request. If that doesn't happen
 * during a specified time, this error is sent.
 *
 * The server has to include the 'Connection' header with the value set
 * to 'close'. This exception class, automatically sets it for you.
 */
export class RequestTimeout extends HttpException {
  constructor (params?: RequestTimeoutParams) {
    const args = params?.headers?.Connection ?
      { ...params } :
      { ...params, headers: { Connection: 'close' } }

    super(HTTP_UNAUTHORIZED, args)
    Object.setPrototypeOf(this, RequestTimeout.prototype)
  }
}
