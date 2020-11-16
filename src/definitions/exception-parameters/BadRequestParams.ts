import { ExceptionParams } from './ExceptionParams'

export interface BadRequestParams extends ExceptionParams {
  errors?: Array<string>,
}
