import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT, STREAM_CREATE } from "./types";
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

export const createStreaming = (formValues) => async (dispatch) => {
  const response = await streams.post("/streams", formValues);
  dispatch({ type: STREAM_CREATE, payload: response.data });
};
