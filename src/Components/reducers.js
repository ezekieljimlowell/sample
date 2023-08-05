import * as ACTIONS from "./actions";

const initialState = {
    userList: [
        {
            name: "ezekeil", age: 24, skills: ["java", "python", "React"],
            department: "Software solutions", roles: "Admin", email: "ejl@yahoo.com",
            id: 1, password: '123wer.,', profilePhoto: "",
        },
        {
            name: "daniel", age: 26, skills: ["java", "python", "React"],
            department: "Software solutions", roles: "Manager", email: "ejl@yahoo.com",
            id: 2, password: '43dfasP,', profilePhoto: "",
        }, {
            name: "vettori", age: 30, skills: ["java", "python", "React"],
            department: "Software solutions", roles: "Employee", email: "ejl@yahoo.com",
            id: 3, password: '56fd12Z', profilePhoto: "",
        },
        {
            name: "vettori", age: 30, skills: ["java", "python", "React"],
            department: "Software solutions", roles: "Employee", email: "ejl@yahoo.com",
            id: 3, password: '56fd12Z', profilePhoto: "",
        }
    ],
    loginInfo: {
        email: "",
        password: "",
    },
    editInfo: {},
    signupInfo: {},
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case ACTIONS.LOGIN_SUCCESS:
            return {
                ...state, loginInfo: action.loginInfo
            }
        case ACTIONS.EDIT_USER:
            return {
                ...state, editInfo: action.editInfo
            }
        case ACTIONS.SIGNUP:
            return {
                ...state, signupInfo: action.signupInfo, userList: [...state?.userList, action.signupInfo]
            }
        default:
            return state
    }
}

export default reducer;