const getLoginInfo = state => state.reducer.loginInfo;
const getEditInfo = state => state.reducer.editInfo;
const getSignUpInfo = state => state.reducer.signupInfo;
const getUserList = state => state.reducer.userList;

const selectors = {
    getLoginInfo,
    getEditInfo,
    getSignUpInfo,
    getUserList,
}

export default selectors;