import { ExceptionParams } from './ExceptionParams'

export interface UnprocessableEntityParams extends ExceptionParams {
  errors?: Array<string>,
}
