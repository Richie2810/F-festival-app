import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import stages from './stages/reducer'
import plans from './plans/reducer'
import acts from './acts/reducer'
import singleStage  from './singleStage/reducer'
import news from './news/reducer'
import crew from './crew/reducer'

export default combineReducers({
  appState,
  user,
  stages,
  plans,
  acts,
  singleStage,
  news,
  crew
});
