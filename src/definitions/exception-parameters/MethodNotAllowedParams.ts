import { HttpMethod } from '../../types/HttpMethod'
import { ExceptionParams } from './ExceptionParams'

export interface MethodNotAllowedParams extends ExceptionParams {
  allowedMethods?: Array<HttpMethod>,
}
