import { HTTP_CONFLICT } from '../../http-error-codes'
import { HttpException } from '../../HttpException'
import { ConflictParams } from '../../definitions/exception-parameters/ConflictParams'

/**
 * This error should be thrown when there is a conflict with the current
 * state of the resource. According to RFC 7231, a payload that explains
 * the source of the conflict should be included in the body response,
 * when this error is thrown.
 *
 * There is no universal standard about the format of the payload. The
 * developer may choose to format this payload in any way that he/she likes.
 * However we think that it is a good idea to format it like this:
 * {,
 *    "conflicts": [
 *      "The resource that you are trying to create already exists."
 *    ]
 * }
 *
 * These scearios may be good candidates to throw a Conflict error:
 * 1- The client is trying to create a resource that already exists.
 * 2- The client is trying to add a nested resource in a resource that
 *    has been deleted. For example: Adding a file in a deleted folder.
 * 3- An edit conflict. If two clients try to edit a resource at the same time
 *    (A good example is a merge conflict in Git)
 */
export class Conflict extends HttpException {
  constructor (params?: ConflictParams) {
    const args: ConflictParams = params?.conflicts && !params.body ?
      { ...params, body: { conflicts: params.conflicts } } :
      { ...params }

    super(HTTP_CONFLICT, args)
    Object.setPrototypeOf(this, Conflict.prototype)
  }
}
