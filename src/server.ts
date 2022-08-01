import app from './app'

const port = process.env.PORT || 7219



app.listen(port, () => {
  console.start(`App is listening on port ${port} using NodeJS version \
${process.versions.node} With PID: ${process.pid} in ${process.env.APP_MODE} mode`)
})