import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILED,
  UPDATE_DATA,
  CREATE_DATA,
  DELETE_DATA,
  SAVE_DATA,
} from "../../utils/actionConstanst";

const initialState = [];
function dataReducers(state = initialState, payload) {
  switch (payload.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case DATA_REQUEST:
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
        requesting: false,
        success: true,
      };
    case DATA_FAILED:
      return {
        ...state,
        requesting: false,
        success: false,
        message: payload.message,
      };
    default:
      return state;
  }
}
export default dataReducers;
