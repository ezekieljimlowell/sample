import { actionTypes } from "./actionTypes";

const initialState = {
    profile: {
        name: '',
        age: 28,
        emailId: '',
        salary: '',
        profileImage: '',
    },
    formSubmitted: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            console.log('login', action.payload.user)
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false // after update user formsubmition reset
            }
        case actionTypes.ADD_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false // after update user formsubmition reset
            }
        case actionTypes.UPDATE_USER:
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false // after update user formsubmition reset
            }
        case actionTypes.UPDATE_PROFILE_PICTURE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    profileImage: action.payload.image
                }
            }
        case actionTypes.FORM_SUBMISSION_STATUS:
            return {
                ...state,
                formSubmitted: action.payload.status
            }
        default:
            return state;
    }
}

export default reducer;