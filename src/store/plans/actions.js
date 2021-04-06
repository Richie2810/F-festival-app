import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage
} from "../appState/actions";
import { selectUser } from "../user/selectors";

const userPlansFetched = plans => ({
    type: 'plans/fetched',
    payload :plans
})

export const getUsersPlans = () => async (dispatch, getState) => {
    dispatch(appLoading())
    const { token } = selectUser(getState())
    try {
        const response = await axios.get(`${apiUrl}/plans`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response.data)
        dispatch(userPlansFetched(response.data))
        dispatch(appDoneLoading())
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