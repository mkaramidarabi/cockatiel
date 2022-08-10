import { Request, Response } from "express"
import { ExError } from "../../errors"

type GeneralError = ExError

function errorHandler(err: GeneralError, data: object, req: Request, res: Response) {
  res.statusCode = err?.httpStatus || 500
  if (!err) _unknownError(res)
  if (err?.name === 'ValidationError') {
    return res.status(403).send('')
  }
  if (err instanceof ExError) {
    return res.json(err.mutatedError(data, res.__(err.errorKey)))
  } else _logError(err)
  _unknownError(res)
}

const _unknownError = (res: Response) => {
  return res.json({
    success: false,
    error: '-1',
    description: res.__('UnknownError'),
  })
}

const _logError = (err: Error): void => {
  if (err.stack) {
    const [errorReason, errorLocation] = err.stack.split('\n')
    console.error(errorReason)
    console.error(errorLocation)
  }
  else console.error(err.message)
}

module.exports = errorHandler
