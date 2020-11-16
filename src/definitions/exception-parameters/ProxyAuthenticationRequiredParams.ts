import { ExceptionParams } from './ExceptionParams'

export interface ProxyAuthenticationRequiredParams extends ExceptionParams {
  proxyAuthenticateHeader?: string
}
