import { legacy_createStore, combineReducers } from "redux";
import reducer from "../Components/reducers";

const rootReducer = combineReducers({
    user: reducer
})

const configureStore = legacy_createStore(rootReducer)

export default configureStore;