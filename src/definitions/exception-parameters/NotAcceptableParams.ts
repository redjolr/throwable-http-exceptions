import { MimeSubType } from '../../enums/mime-subtype.enum'
import { ExceptionParams } from './ExceptionParams'

export interface NotAcceptableParams extends ExceptionParams {
  acceptable?: Array<MimeSubType>
}
