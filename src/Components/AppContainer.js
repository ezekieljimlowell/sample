import App from "../App";
import selectors from "./selectors";
import { connect } from "react-redux";
import { login, signup, editUser } from "./actions";

const mapStateToProps = state => ({
    loginInfo: selectors.getLoginInfo(state),
    editInfo: selectors.getEditInfo(state),
    userList: selectors.getUserList(state),
    signupInfo: selectors.getSignUpInfo(state),
})

const mapDispatchToProps = {
    login,
    signup,
    editUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)