interface ExtendedError extends Error {
    httpStatus?: number
    code?: number
    errorKey?: string
}

class ExError extends Error implements ExtendedError {
    httpStatus?: number
    code?: number
    errorKey?: string

    constructor(httpStatus: number, code: number, errorKey: string) {
        super()
        this.httpStatus = httpStatus
        this.code = code
        this.errorKey = errorKey
    }

    mutatedError(data: object) {
        return {
            success: false,
            error: this.code,
            description: this.message,
            data
        }
    }
}

const ExErrors = {
    Custom: ExError,
    Validation: {
        Data: new ExError(400, 1, 'InvalidData')
    }
}

export {
    ExError,
    ExErrors
}