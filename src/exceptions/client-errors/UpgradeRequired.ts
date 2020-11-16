import { HTTP_UPGRADE_REQUIRED } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { UpgradeRequiredParams } from '../../definitions/exception-parameters/UpgradeRequiredParams'

/**
 * RFC 7231 Section 6.5.15
 * The 426 (Upgrade Required) status code indicates that the server
 * refuses to perform the request using the current protocol but might
 * be willing to do so after the client upgrades to a different
 * protocol. The server MUST send an Upgrade header field in a 426
 * response to indicate the required protocol(s) (Section 6.7 of
 * [RFC7230]).
 *
 * In this Error class, the Upgrade header will be generated for you,
 * if you pass the params.upgradeTo optional parameter as a string
 * or an array of strings that represent the protocol/s that you want
 * the client to upgrade to.
 */
export class UpgradeRequired extends HttpException {
  constructor (params?: UpgradeRequiredParams) {

    const args = params?.upgradeTo && !params?.headers?.Upgrade ?
      {
        ...params,
        headers: {
          ...params.headers,
          Upgrade: typeof params.upgradeTo === 'string' ? params.upgradeTo : params.upgradeTo.join(', '),
        },
      } :
      { ...params }

    super(HTTP_UPGRADE_REQUIRED, args)
    Object.setPrototypeOf(this, UpgradeRequired.prototype)
  }
}
