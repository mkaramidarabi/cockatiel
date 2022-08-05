import { GeoData } from "./geoData"
import {AppModes} from './enums'


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
  }
}

export {}