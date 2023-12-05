import {
    MOVIE_REQUEST,
    DATA_SUCCESS,
    DATA_FAILED,
    UPDATE_DATA,
    CREATE_DATA,
    DELETE_DATA,
    SAVE_DATA,
    TODO_MODAL_HANDLER,
    CLOSE_MOVIE,
    DATA_REQUEST_BY,
    OPEN_MOVIE
} from '../constant/movie'

export const loadData = () => ({
    type: MOVIE_REQUEST,
});
export const loadDataBy = (status: string) => ({
    type: DATA_REQUEST_BY,
    data: status
});


export const fetchDataSuccess = (data: any) => {
    console.log("Action: fetchDataSuccess", data);
    return {
        type: DATA_SUCCESS,
        data: data
    }
}
export const fetchDataFailed = (error: any) => {
    console.log("Action: fetchDataFailed");

    return {
        type: DATA_FAILED,
        error: {
            error
        }
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

