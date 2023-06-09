import { legacy_createStore } from "redux";
import reducer from "../Components/reducers";

const configureStore = legacy_createStore(reducer)

export default configureStore;