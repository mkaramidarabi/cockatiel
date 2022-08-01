import express, { Application } from 'express'
import cors from 'cors'

import middleware from './middleware'
import defineLogger from './utils/logger'
import successHandler from './utils/handler/success'
import { i18n, initI18n } from './i18n'

defineLogger()
initI18n()

const app: Application = express()

app.enable('trust proxy')
app.disable('x-powered-by')
app.disable('view cache')

app.use(express.json())
app.use(cors())
app.use(i18n.init)

app.get('/', (req, res) => successHandler(req, res, 200, { Greet: i18n.__('Greet') }))

app.use(middleware.fourO4Page)



const port = process.env.PORT || 7219
console.log(i18n.__('Greet'))
app.listen(port, () => {
  console.start(`App is listening on port ${port} using NodeJS version \
${process.versions.node} With PID: ${process.pid} in ${process.env.APP_MODE} mode`)
})



process.on('unhandledRejection', (e: Error) => {
  const promiseCausedProblem = e.stack.split('\n ')
  console.warn(`Unhandled Rejection --> ${e},
  ${promiseCausedProblem[1]}`)
})
