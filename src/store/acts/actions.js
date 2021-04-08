import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage
} from "../appState/actions";

const actsFetched = acts => ({
    type: 'acts/fetched',
    payload: acts
})

export const getActs = () => async (dispatch, getState) => {
    dispatch(appLoading())
    console.log('here')
    try {
        const response = await axios.get(`${apiUrl}/acts`)
        //console.log('inside action',response.data)
        dispatch(actsFetched(response.data))
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