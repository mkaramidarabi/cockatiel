import {
  cleanEnv, port, str,
} from 'envalid'

function validateEnv() {
  cleanEnv(process.env, {
    PORT: port(),
    APP_MODE: str(),
  })
}

export default validateEnv
