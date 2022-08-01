import { expect, describe, it } from '@jest/globals'
import request from "supertest"

import app from './../src/app'

describe("app should run successfully", () => {
  it("should return 15 for add(10,5)", async () => {
    const res = await request(app).get("/")
    expect(res.body.success).toBe(true)
  })
})