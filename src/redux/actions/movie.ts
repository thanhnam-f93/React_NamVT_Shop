import {
    MOVIE_REQUEST,
    DATA_SUCCESS,
    DATA_FAILED,
    UPDATE_DATA,
    CREATE_DATA,
    DELETE_DATA,
    SAVE_DATA,
    CLOSE_MOVIE,
    OPEN_MOVIE,
    MOVIE_REQUEST_BY,
    MOVIE_REQUEST_COMINGSOON,
    ADD_CART,
    DATA_COMING_SUCCESS
} from '../constant/movie'

export const loadData = () => ({
    type: MOVIE_REQUEST,
});
export const loadDataBy = (input: any) => {
    return {
        type: MOVIE_REQUEST_BY,
        data: input
    }
};
export const loadMovieComingSoon = () => {
    return {
        type: MOVIE_REQUEST_COMINGSOON,
    }
};

export const fetchDataSuccess = (movies: any, totalPage) => {
    console.log("Action: fetchDataSuccess", movies);
    return {
        type: DATA_SUCCESS,
        data: { movies, totalPage }
    }
}
export const fetchComingSuccess = (movies: any, totalPage) => {
    console.log("Action: fetchComingSuccess", movies);
    return {
        type: DATA_COMING_SUCCESS,
        data: { movies, totalPage }
    }
}
export const fetchDataFailed = (error: any) => {
    console.log("Action: fetchDataFailed");

    return {
        type: DATA_FAILED,
        error: error

    }
}
export const saveDataInfo = (data: any) => {
    return {
        type: SAVE_DATA,
        data: data
    }
}
export const fetchCreateData = (payload: any) => {
    return {
        type: CREATE_DATA,
        payload: payload,
    }

}
export const fetchUpdateData = (obj: any, id: string) => {
    return {
        type: UPDATE_DATA,
        data: { obj, id }
    }
}
export const fetchDeleteData = (id: string) => {
    return {
        type: DELETE_DATA,
        data: id
    }
}
export const openVideo = () => {
    return {
        type: OPEN_MOVIE,
    }
}
export const closeVideo = () => {
    return {
        type: CLOSE_MOVIE,
    }
}
export const addCart = (data) => {
    return {
        type: ADD_CART,
        data: data
    }
}
