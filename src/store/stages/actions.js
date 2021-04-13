import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage
} from "../appState/actions";
import { selectUser } from "../user/selectors";

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
        //console.log('fetched',response.data)
        dispatch(stagesFetched(response.data))
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

export const getStagesForCrew = () => async (dispatch, getState) => {
  dispatch(appLoading());
  const { token } = selectUser(getState())

    try {
        const response = await axios.post(`${apiUrl}/stages/forCrew`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
        )
        console.log('fetched',response.data)
        dispatch(stagesFetched(response.data))
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

  export const moveCrew = (stageId, crewId) => async (dispatch, getState) => {
    dispatch(appLoading())
    const { token } = selectUser(getState())
    try {
      const response = await axios.post(`${apiUrl}/stages/moveCrew`,
      {
        stageId,
        crewId
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch(stagesFetched(response.data))
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