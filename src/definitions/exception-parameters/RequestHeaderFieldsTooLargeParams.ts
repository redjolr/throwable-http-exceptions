import { ExceptionParams } from './ExceptionParams'

export interface RequestHeaderFieldsTooLargeParams extends ExceptionParams {
  errors?: Array<string>
}
