import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage
} from "../appState/actions";
import { selectUser } from "../user/selectors";

const newsFetched = news =>({
    type:'news/fetched',
    payload: news
})

export const getNews = () => async (dispatch, getState) => {
    dispatch(appLoading())
    try {
        const response = await axios.get(`${apiUrl}/news`)
        console.log('inside action',response.data)
        dispatch(newsFetched(response.data))
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

export const addNewsFeedItem = ( title, description, link, img ) => async (dispatch, getState) => {
  dispatch(appLoading())
  const { token } = selectUser(getState())

  try{
    const response = await axios.post(`${apiUrl}/news/new`, {
      title,
      description,
      link,
      img
    },
    {
        headers: {
          Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
    dispatch(newsFetched(response.data))
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

export const removeNewsFeedItem = (newsFeedId) => async (dispatch, getState) => {
  const { token } = selectUser(getState())
  try {
    const response = await axios.delete(`${apiUrl}/news/delete/${newsFeedId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      } 
    })
    dispatch(newsFetched(response.data))
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