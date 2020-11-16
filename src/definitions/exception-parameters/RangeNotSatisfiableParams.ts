import { ExceptionParams } from './ExceptionParams'

export interface RangeNotSatisfiableParams extends ExceptionParams {
  ContentRangeHeader?: string
}
