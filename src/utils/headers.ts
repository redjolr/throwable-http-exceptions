import { format as dateFormat } from 'date-and-time'

export const retryAfter = (input: Date | number): string => {
  if (input instanceof Date) {
    return `${dateFormat(input, 'ddd, DD MMM YYYY HH:mm:ss')} GMT`
  }
  return input.toString()
}
