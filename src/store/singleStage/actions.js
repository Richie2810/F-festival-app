import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
//   showMessageWithTimeout,
  setMessage
} from "../appState/actions";
import { selectUser } from "../user/selectors";

const singleStageFetched = stage => ({
    type:'singleStage/singleFetched',
    payload: stage
  })

export const getSingleStage = (stageId) => {
    return async (dispatch, getState) => {
        dispatch(appLoading());
        const { token } = selectUser(getState())
        try {
            const response = await axios.get(`${apiUrl}/stages/${stageId}`,
            {
                headers: {
                  Authorization: `Bearer ${token}`
                } 
            })
            // console.log('fetched',response.data)
            dispatch(singleStageFetched(response.data))
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