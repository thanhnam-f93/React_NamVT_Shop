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
    DATA_COMING_SUCCESS,
    ADD_MOVIE_CART_SUCCESS,
    INCREASE_CART,
    DECREASE_CART,
    REMOVE_CART,
    MOVIE_REQUEST_CATEGORY,
    REQUEST_TRUE,
    REQUEST_FALSE,
    MOVIE_CLEAR
} from '../constant/movie'

export const loadData = (input: any) => {
    return {
        type: MOVIE_REQUEST,
        data: input
    }
};
export const loadDataCategory = (input: any) => {
    return {
        type: MOVIE_REQUEST_CATEGORY,
        data: input
    }
};
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
    return {
        type: DATA_SUCCESS,
        data: { movies, totalPage }
    }
}
export const fetchComingSuccess = (movies: any, totalPage) => {
    return {
        type: DATA_COMING_SUCCESS,
        data: { movies, totalPage }
    }
}
export const addMovieCardSuccess = (movies: any) => {
    return {
        type: ADD_MOVIE_CART_SUCCESS,
        data: movies
    }
}

export const fetchDataFailed = (error: any) => {
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
export const increase = (data) => {
    return {
        type: INCREASE_CART,
        data: data
    }
}
export const decrease = (data) => {
    return {
        type: DECREASE_CART,
        data: data
    }
}
export const remove = (data) => {
    return {
        type: REMOVE_CART,
        data: data
    }
}

export const start = () => {
    return {
        type: REQUEST_TRUE,

    }
}
export const finish = () => {
    return {
        type: REQUEST_FALSE,

    }
}
export const clear = () => {
    return {
        type: MOVIE_CLEAR,

    }
}