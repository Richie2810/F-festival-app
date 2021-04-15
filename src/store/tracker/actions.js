import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage
} from "../appState/actions";

const trackerFetched = tracker => ({
    type:'tracker/fetched',
    payload: tracker
})

export const getTrackers = () => async (dispatch, getState) => {
    dispatch(appLoading())
    //console.log('here')
    try {
        const response = await axios.get(`${apiUrl}/tracker`)
        //console.log('inside action get tracker',response.data)
        dispatch(trackerFetched(response.data))
        dispatch(appDoneLoading());
    } catch(error) {
        if (error.response) {
          console.log(error.response.data.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error.message);
          dispatch(setMessage("danger", true, error.message));
        }
        dispatch(appDoneLoading());
    }
}

export const changeStatus = (trackerId, isEnabled) => async (dispatch, getState) => {
  dispatch(appLoading())
    //console.log('here')
    try {
        const response = await axios.post(`${apiUrl}/tracker/changeStatus`,
        {
          trackerId,
          isEnabled
        })
        //console.log('inside action get tracker',response.data)
        dispatch(trackerFetched(response.data))
        dispatch(appDoneLoading());
    } catch(error) {
        if (error.response) {
          console.log(error.response.data.message);
          dispatch(setMessage("danger", true, error.response.data.message));
        } else {
          console.log(error.message);
          dispatch(setMessage("danger", true, error.message));
        }
        dispatch(appDoneLoading());
    }
}