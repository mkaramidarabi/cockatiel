import { NextFunction, Request, Response } from 'express'
import geoIp from 'geoip-lite'

const checker = async (req: Request, _: Response, next: NextFunction) => {
  let ip = req.ip
  const ip2 = req.header['x-real-ip'] || req.header['cf-connecting-ip']
  if (typeof ip2 !== 'undefined') {
    ip = ip2
  }
  req.geoData = geoIp.lookup(ip)
  if (typeof req.geoData !== 'object') {
    req.geoData = { ip }
  }

  const incomingRequestId = _getRequestId(req)
  if (incomingRequestId) {
    req.geoData.requestId = incomingRequestId
  }

  next()
}

const _getRequestId = (req) => {
  return req.headers['ar-request-id']
}

module.exports = checker
