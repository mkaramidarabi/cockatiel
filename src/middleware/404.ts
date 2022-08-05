import { Request, Response } from "express"

const fourO4Page = (req: Request, res: Response) => {
  return res.status(404).send('4o4')
}

export default fourO4Page