import {
  MOVIE_REQUEST,
  DATA_SUCCESS,
  DATA_FAILED,
  UPDATE_DATA,
  CREATE_DATA,
  DELETE_DATA,
  SAVE_DATA,
  OPEN_MOVIE,
  CLOSE_MOVIE,
  MOVIE_REQUEST_BY
} from "../constant/movie";

const initialState = { disPlay: "none" };
function movieReducers(state = initialState, payload) {

  switch (payload.type) {

    case SAVE_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case MOVIE_REQUEST:
      // console.log("Reducer-DATA_REQUEST");
      return {
        ...state,
        requesting: true,
      };
    case MOVIE_REQUEST_BY:
      // console.log("Reducer-DATA_REQUEST");
      return {
        ...state,
        requesting: true,
      };
    case CREATE_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case DELETE_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case DATA_SUCCESS:

      return {
        ...state,
        listMovie: payload.data.movies,
        totalPage: payload.data.totalPage,
        requesting: false,
        success: true,
        modalDisplay: false
      };
    case DATA_FAILED:
      console.log("Start  payload movieReducers type", payload.type);
      console.log("Start  payload movieReducers payload", payload);
      return {
        ...state,
        requesting: false,
        success: false,
        error: payload.error,
      };
    case OPEN_MOVIE:
      return {
        ...state,
        disPlay: "block"
      };
    case CLOSE_MOVIE:
      return {
        ...state,
        disPlay: "none"
      };
    default:
      return state;
  }
}
export default movieReducers;
