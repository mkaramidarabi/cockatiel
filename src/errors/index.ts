import { ErrorKeys } from "../interfaces/errorKeys"

interface ExtendedError extends Error {
    httpStatus: number
    code: number
    errorKey: ErrorKeys
}

class ExError extends Error implements ExtendedError {
    httpStatus: number
    code: number
    errorKey: ErrorKeys

    constructor(httpStatus: number, code: number, errorKey: ErrorKeys) {
        super()
        this.httpStatus = httpStatus
        this.code = code
        this.errorKey = errorKey
    }

    mutatedError(data: object, description: string) {
        return {
            success: false,
            error: this.code,
            description,
            data
        }
    }
}

const ExErrors = {
    Custom: ExError,
    Validation: {
        Data: new ExError(400, 1, ErrorKeys.InvalidData)
    }
}

export {
    ExError,
    ExErrors
}