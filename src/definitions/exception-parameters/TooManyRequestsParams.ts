import { ExceptionParams } from './ExceptionParams'

interface RetryAfterDate extends ExceptionParams {
  retryAfterDate?: Date
  retryAfterSeconds?: never
}

interface RetryAfterSeconds extends ExceptionParams {
  retryAfterDate?: never
  retryAfterSeconds?: number
}

interface ErrorsParam extends ExceptionParams {
  errors?: Array<string>
}

export type TooManyRequestsParams = Partial<
  ErrorsParam &
  (RetryAfterDate | RetryAfterSeconds)
>

