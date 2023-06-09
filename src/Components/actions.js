
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const SIGNUP = 'SIGNUP'
export const EDIT_USER = 'EDIT_USER'
export const GET_USER_LIST = 'GET_USER_LIST'

export const updateLoginUser = (loginInfo) => ({
    type: LOGIN_SUCCESS,
    loginInfo,
})

export const updateSignUp = (userInfo) => ({
    type: SIGNUP,
    userInfo,
})

export const updateEditUser = (editInfo) => ({
    type: EDIT_USER,
    editInfo,
})

export const updateUserList = userList => ({
    type: GET_USER_LIST,
    userList,
})

export const login = loginInfo => async dispatch => {
    if (loginInfo) {
        dispatch(updateLoginUser(loginInfo))
    }
}

export const signup = userInfo => dispatch => {
    if (userInfo) {
        dispatch(updateSignUp(userInfo))
    }
}

export const editUser = editInfo => dispatch => {
    if (editInfo) {
        dispatch(updateEditUser(editInfo))
    }
}

export const getUserList = userList => dispatch => {
    if (userList) {
        dispatch(updateUserList(userList))
    }
}

