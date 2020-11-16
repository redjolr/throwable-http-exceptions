import { HTTP_TOO_MANY_REQUESTS } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { TooManyRequestsParams } from '../../definitions/exception-parameters/TooManyRequestsParams'
import { ExceptionParams } from '../../../src/definitions/exception-parameters/ExceptionParams'
import { retryAfter } from '../../utils/headers'

/**
 * RFC 6585 Section 4
 * This error indicates that the user has sent too many requests in a
 * given amount of time.
 *
 * The response should include details to explain the condition.
 * In this class, you can do this by setting the 'errors' optional param.
 *
 * In addition, the 'Retry-After' header can be set, indicating how long the
 * client should wait before making a new request.
 * In this class, you can do this by setting either 'retryAfterDate' or
 * 'retryAfterSeconds' optional parameter.
 *
 * The 'retryAfterDate' should be a Javascript Date object indicating the exact
 * time in the future after which the client can resend the request.
 * The 'retryAfterSeconds' similarly indicates the time in seconds that the client
 * should wait after it can resend the request.
 */
export class TooManyRequests extends HttpException {
  constructor (params?: TooManyRequestsParams) {
    const args: ExceptionParams = { ...params }

    if (!params?.body && params?.errors) {
      args.body = params.errors
    }

    if (params?.retryAfterDate) {
      args.headers = {
        'Retry-After': retryAfter(params.retryAfterDate),
        ...params.headers ? params.headers : {},
      }
    }

    if (params?.retryAfterSeconds) {
      args.headers = {
        'Retry-After': params.retryAfterSeconds,
        ...params.headers ? params.headers : {},
      }
    }

    super(HTTP_TOO_MANY_REQUESTS, args)
    Object.setPrototypeOf(this, TooManyRequests.prototype)
  }
}
