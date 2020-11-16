import * as mimes from 'mime-types'
import { HttpHeaders } from './definitions/headers/HttpHeaders'
import { MimeSubType } from './enums/mime-subtype.enum'
import { ExceptionParams } from './definitions/exception-parameters/ExceptionParams'

export class HttpException extends Error {
  public status: number
  public body: string | Buffer | undefined
  public headers: HttpHeaders = {}

  constructor (
    status: number,
    args: ExceptionParams,
  ) {
    super()
    this.status = status
    if (args.body) {
      if (args.body instanceof Buffer) {
        this.body = args.body
        this.headers['Content-Type'] = mimes.lookup(MimeSubType.BINARY) || ''
      } else if (typeof args.body === 'string') {
        this.body = args.body
        this.headers['Content-Type'] = mimes.lookup(MimeSubType.TEXT) || ''
      } else if (['number', 'boolean'].includes(typeof args.body)) {
        this.body = args.body.toString()
        this.headers['Content-Type'] = mimes.lookup(MimeSubType.TEXT) || ''
      } else if (typeof args.body === 'object') {
        this.body = JSON.stringify(args.body)
        this.headers['Content-Type'] = mimes.lookup(MimeSubType.JSON) || ''
      }
    }
    if (args.headers) {
      this.headers = { ...this.headers, ...args.headers }
    }
    if (args.contentType && args.body) {
      this.headers['Content-Type'] = mimes.lookup(args.contentType) || ''
    }

    Object.setPrototypeOf(this, HttpException.prototype)
  }
}
