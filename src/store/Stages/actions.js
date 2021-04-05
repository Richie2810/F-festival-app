import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage
} from "../appState/actions";

const stagesFetched = stages => {
    return {
        type: 'stages/fetched',
        payload: stages
    }
}

export const getStages = (day) => {
    return async (dispatch, getState) => {
        dispatch(appLoading());
        try {
            const response = await axios.post(`${apiUrl}/stages`,
                {
                    day
                }
            )
            console.log('fetched',response.data)
            dispatch(stagesFetched(response.data))
            dispatch(showMessageWithTimeout("success", true, "Stages for that day"));
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
}