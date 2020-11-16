import { ExceptionParams } from './ExceptionParams'

export interface UnavailableForLegalReasonsParams extends ExceptionParams {
  errors?: Array<string>
}
