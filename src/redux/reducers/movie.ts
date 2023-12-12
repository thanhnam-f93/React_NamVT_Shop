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
  MOVIE_REQUEST_BY,
  MOVIE_REQUEST_COMINGSOON,
  DATA_COMING_SUCCESS,
  ADD_MOVIE_CART_SUCCESS,
  DECREASE_CART,
  INCREASE_CART,
  REMOVE_CART,
  MOVIE_REQUEST_CATEGORY,
  MOVIE_CLEAR
} from "../constant/movie";

const initialState = { disPlay: "none", movieCart: [], totalMoney: 0, listMovie: [] };
function movieReducers(state = initialState, payload) {

  switch (payload.type) {

    case SAVE_DATA:
      return {
        ...state,
        data: payload.data,
      };
    case MOVIE_REQUEST:

      return {
        ...state,
        requesting: true,
      };
    case MOVIE_REQUEST_CATEGORY:
      // clear old data
      return {
        ...state,
        requesting: true,
      };
    case MOVIE_CLEAR:
      // clear old data
      return {
        ...state,
        listMovie: [],
      };
    case MOVIE_REQUEST_COMINGSOON:

      return {
        ...state,
        requesting: true,
      };
    case MOVIE_REQUEST_BY:

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
    case DATA_COMING_SUCCESS:
      return {
        ...state,
        movieComing: payload.data.movies,
        totalPage: payload.data.totalPage,
        requesting: false,
        success: true,
        modalDisplay: false
      };
    case ADD_MOVIE_CART_SUCCESS:

      return {
        ...state,
        movieCart: [...state.movieCart, payload.data],
        totalMoney: (state.totalMoney + Number(payload.data.price)),
        requesting: false,
        success: true
      };
    case DATA_FAILED:
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
    case INCREASE_CART:
      return {
        ...state,
        movieCart: state.movieCart.map((item: any) => {
          if (item.movieId == payload.data.movieId) {
            return { ...item, total: item.total + 1 };
          }
          return item;
        }),
        totalMoney: (state.totalMoney + Number(payload.data.price)),
      };
    case DECREASE_CART:
      return {
        ...state,
        movieCart: state.movieCart.map((item: any) => {
          if (item.movieId == payload.data.movieId) {
            return { ...item, total: item.total - 1 };
          }
          return item;
        }),
        totalMoney: (state.totalMoney - Number(payload.data.price)),
      };
    case REMOVE_CART:
      return {
        ...state,
        movieCart: state.movieCart.filter((item: any) => {
          return item.movieId != payload.data.movieId
        }),
        totalMoney: (state.totalMoney - (Number(payload.data.price) * Number(payload.data.total))),
      };
    default:
      return state;
  }
}
export default movieReducers;
