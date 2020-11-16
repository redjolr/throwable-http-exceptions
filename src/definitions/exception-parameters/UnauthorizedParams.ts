import { ExceptionParams } from './ExceptionParams'

export interface UnauthorizedParams extends ExceptionParams {
  WWWAuthenticateHeader?: string
}
