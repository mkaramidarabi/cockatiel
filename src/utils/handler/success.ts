import { Request, Response } from "express"

function successHandler(req: Request, res: Response, status = 200, data: object = undefined, info = 'Done'): Response {
  return res.status(status).send({
    success: true,
    data: data,
    info: info
  })
}

export default successHandler
