import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILED,
  UPDATE_DATA,
  CREATE_DATA,
  DELETE_DATA,
  SAVE_DATA,
  TODO_MODAL_HANDLER,
  TODO_DISPLAY
} from "../constant/todo";

const initialState = { modalDisplay: false, todoModal: {} };
function todoReducers(state = initialState, payload) {
  console.log("Start Reducer", payload);
  switch (payload.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case DATA_REQUEST:
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
      // console.log("Reducer-DATA_SUCCESS", payload);
      return {
        ...state,
        listTodo: payload.data,
        requesting: false,
        success: true,
        modalDisplay: false
      };
    case DATA_FAILED:
      return {
        ...state,
        requesting: false,
        success: false,
        message: payload.message,
      };
    case TODO_MODAL_HANDLER:
      // console.log("Before Reducer", state);
      return {
        ...state, modalDisplay: !state.modalDisplay
      };
    case TODO_DISPLAY:
      return {
        ...state, todoModal: payload.todoModal
      };
    default:
      return state;
  }
}
export default todoReducers;
