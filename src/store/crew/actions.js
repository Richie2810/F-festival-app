import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage
} from "../appState/actions";
import { selectUser } from "../user/selectors";

const crewFetched = crew => ({
    type: 'crew/fetched',
    payload: crew
})

export const getCrew = () => async (dispatch, getState) => {
    dispatch(appLoading())
    //console.log('here')
    try {
        const response = await axios.get(`${apiUrl}/crew`)
        //console.log('inside action',response.data)
        dispatch(crewFetched(response.data))
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

