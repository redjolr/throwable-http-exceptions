import { HttpHeaders } from './HttpHeaders'

export interface UnauthorizedHeaders extends HttpHeaders {
  WWWAuthenticate: string
}
