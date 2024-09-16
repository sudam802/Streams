import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  STREAM_CREATE,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  UPDATE_STREAM,
  EDIT_STREAM,
} from "./types";
export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: {
      userId: userId,
    },
  };
};

export const signOut = (userId) => {
  return {
    type: SIGN_OUT,
    payload: {
      userId: userId,
    },
  };
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
  dispatch({ type: STREAM_CREATE, payload: response.data });
};
