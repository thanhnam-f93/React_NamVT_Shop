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
    MOVIE_REQUEST_BY
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


export const fetchDataSuccess = (movies: any, totalPage) => {
    console.log("Action: fetchDataSuccess", movies);
    return {
        type: DATA_SUCCESS,
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

