import { MimeSubType } from '../../enums/mime-subtype.enum'
import { ExceptionBody } from '../exception-body.type'
import { HttpHeaders } from '../headers/HttpHeaders'

export interface ExceptionParams {
  body?: ExceptionBody
  headers?: HttpHeaders,
  contentType?: MimeSubType
}
