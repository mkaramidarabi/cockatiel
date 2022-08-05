import {config as configDotenv} from 'dotenv'
import {resolve} from 'path'
import { AppModes } from '../interfaces/enums'

switch(process.env.APP_MODE) {
  case AppModes.DEV:
    configDotenv({
      path: resolve(__dirname, "../.env.dev")
    })
    break
  case AppModes.LOCAL:
    configDotenv({
      path: resolve(__dirname, "../.env.local")
    })
    break
  case AppModes.STAGING:
    configDotenv({
      path: resolve(__dirname, "../.env.staging")
    })
    break
  case AppModes.PRODUCTION:
    configDotenv({
      path: resolve(__dirname, "../.env.production")
    })
    break
  default:
    throw new Error(`'APP_MODE' ${process.env.APP_MODE}`)
}