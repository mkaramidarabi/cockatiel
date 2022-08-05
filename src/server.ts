import app from './app'
import './config'
import validateEnv from './utils/validate/env'

validateEnv()


const port = process.env.PORT

app.listen(port, () => {
  console.start(`App is listening on port ${port} using NodeJS version \
${process.versions.node} With PID: ${process.pid} in ${process.env.APP_MODE} mode`)
})