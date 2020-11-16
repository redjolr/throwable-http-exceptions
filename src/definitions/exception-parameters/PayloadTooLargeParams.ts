import { ExceptionParams } from './ExceptionParams'

interface PayloadTooLargeParamsDate extends ExceptionParams {
  retryAfterDate?: Date
  retryAfterSeconds?: never
}

interface PayloadTooLargeParamsSeconds extends ExceptionParams {
  retryAfterSeconds?: number
  retryAfterDate?: never
}

export type PayloadTooLargeParams =
  PayloadTooLargeParamsDate |
  PayloadTooLargeParamsSeconds
