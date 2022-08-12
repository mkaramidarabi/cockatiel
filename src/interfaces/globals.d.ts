import { GeoData } from "./geoData"
import {AppModes} from './generalEnums'
import {ErrorKeys} from './errorKeys'


declare global {
  namespace Express {
    export interface Request {
      geoData: null | GeoData
    }
  }
  namespace NodeJS {
    export interface ProcessEnv {
      PORT: string,
      APP_MODE: AppModes
    }
    export interface Error {
      errorKey: ErrorKeys,
      code: number
    }
  }
}

export {}