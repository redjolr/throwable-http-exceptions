import { ExceptionParams } from './ExceptionParams'

export interface ConflictParams extends ExceptionParams {
  conflicts?: Array<string>,
}
