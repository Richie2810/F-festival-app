import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import stages from './stages/reducer'

export default combineReducers({
  appState,
  user,
  stages
});
