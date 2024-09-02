import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT } from "./types";
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

export const createStream = (formValues) => {
  return async (dispacth) => {
    streams.post("/streams", formValues);
  };
};
