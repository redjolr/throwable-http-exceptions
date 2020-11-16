import { ExceptionParams } from './ExceptionParams'

interface PreconditionRequiredParamsBasic extends ExceptionParams {
  preconditions?: Array<string>
  instructions: never
}

interface PreconditionRequiredParamsExtended extends ExceptionParams {
  preconditions: Array<string>
  instructions?: Array<string>
}

/**
 *
 * The optional 'preconditions' field here must indicate what precondition/s the client
 * should set.
 *
 * The optional 'instructions' field can be set only if the preconditions field
 * is set. Here, you can include extra details for the client to understand
 * how to set the preconditions.
 */
export type PreconditionRequiredParams =
  PreconditionRequiredParamsBasic |
  PreconditionRequiredParamsExtended
