import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  // appLoading,
  // appDoneLoading,
  setMessage
} from "../appState/actions";
import { selectUser } from "../user/selectors";

const userPlansFetched = plans => ({
    type: 'plans/fetched',
    payload :plans
})


export const getUsersPlans = () => async (dispatch, getState) => {
  // dispatch(appLoading())
  const { token } = selectUser(getState())
  try {
      const response = await axios.get(`${apiUrl}/plans`,
      {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
      //console.log('friday',response.data)
      dispatch(userPlansFetched(response.data))
      // dispatch(appDoneLoading())
  } catch(error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      // dispatch(appDoneLoading());
    }
}

export const addToSchedule = (actId) => async (dispatch, getState) => {
  // dispatch(appLoading())
  console.log(actId)
  const { token } = selectUser(getState())
  try{
    const response = await axios.post(`${apiUrl}/plans/addPlan`,
    {
      actId
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    })
    console.log('fetched',response.data)
    dispatch(userPlansFetched(response.data))
    // dispatch(appDoneLoading())
  }catch(error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    // dispatch(appDoneLoading());
  }
}

export const removeFromSchedule = (actId) => async (dispatch, getState) => {
  // dispatch(appLoading())
  console.log('inside action',actId)
  const { token } = selectUser(getState())
  try {
    const response = await axios.delete(`${apiUrl}/plans/removePlan/${actId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    })
    console.log('whats being fetched',response.data)
    dispatch(userPlansFetched(response.data))
    // dispatch(appDoneLoading())
  } catch(error) {
    if (error.response) {
      console.log(error.response.data.message);
      dispatch(setMessage("danger", true, error.response.data.message));
    } else {
      console.log(error.message);
      dispatch(setMessage("danger", true, error.message));
    }
    // dispatch(appDoneLoading());
  }
}