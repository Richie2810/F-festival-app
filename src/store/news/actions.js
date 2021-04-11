import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  setMessage
} from "../appState/actions";

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