import * as actionTypes from '../constants/userinfo'

export const login = (data) => {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}