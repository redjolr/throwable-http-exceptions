export type BodyPrimitives = string | boolean | Buffer | number

export type ExceptionBody =
  BodyPrimitives |
  { [key: string]: any } |
  Array<any>
