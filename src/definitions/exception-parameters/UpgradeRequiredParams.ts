import { ExceptionParams } from './ExceptionParams'

export interface UpgradeRequiredParams extends ExceptionParams {
  upgradeTo?: string | Array<string>
}
