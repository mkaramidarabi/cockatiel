interface GeoData {
  range?: [number, number]
  country?: string
  region?: string
  eu?: '1' | '0'
  timezone?: string
  city?: string
  ll?: [number, number]
  metro?: number
  area?: number
  ip?: string
  requestId?: string
}



export {
  GeoData
}
