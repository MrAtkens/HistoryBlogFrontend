import { toastServerError, toastUnauthorizedError, toastAuthError, toastUserNotFound } from '../toastifyTools'

export const authorizationStatusValidation = (status) => {
    if(status === 500)
        toastServerError()
    else if (status === 404)
        toastUserNotFound()
    else if (status === 401)
        toastAuthError()
}

export const userGetDataStatus = (status) => {
    if(status === 500)
        toastServerError()
    else if (status === 404)
        toastUserNotFound()
    else if (status === 401) {
        toastUnauthorizedError()
        localStorage.removeItem('jwt_token');
    }
}
