import { Request, Response, NextFunction } from 'express'
import { HTTP_INTERNAL_SERVER_ERROR } from '../http-error-codes'
import { HttpException } from '../HttpException'

const httpErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (err instanceof HttpException) {
    const code = err.status ? err.status : HTTP_INTERNAL_SERVER_ERROR
    res.status(code)
      .set(err.headers)
      .send(err.body)
  } else {
    next()
  }
}

export default httpErrorHandler
