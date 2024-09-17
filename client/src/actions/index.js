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

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.post(`/streams/${id}`);
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.post("/streams");
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
export const editStream = (id) => async (dispatch) => {
  const response = streams.put(`/streams/${id}`);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};
