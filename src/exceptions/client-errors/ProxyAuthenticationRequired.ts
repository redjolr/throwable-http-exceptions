import { HttpException } from '../../HttpException'
import { HTTP_PROXY_AUTHENTICATION_REQUIRED } from '../../http-error-codes'
import { ProxyAuthenticationRequiredParams } from '../../definitions/exception-parameters/ProxyAuthenticationRequiredParams'

export class ProxyAuthenticationRequired extends HttpException {
  constructor (params?: ProxyAuthenticationRequiredParams) {
    const args = params?.proxyAuthenticateHeader && !params?.headers?.['Proxy-Authenticate'] ?
      { ...params, headers: { ...params.headers, 'Proxy-Authenticate': params.proxyAuthenticateHeader } } :
      { ...params }

    super(HTTP_PROXY_AUTHENTICATION_REQUIRED, args)
    Object.setPrototypeOf(this, ProxyAuthenticationRequired.prototype)
  }
}
