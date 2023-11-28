import {
    DATA_REQUEST,
    DATA_SUCCESS,
    DATA_FAILED,
    UPDATE_DATA,
    CREATE_DATA,
    DELETE_DATA,
    SAVE_DATA
} from '../../utils/actionConstanst'

export const loadData = () => {
    return {
        type: DATA_REQUEST
    }
}
export const fetchDataSuccess = (data: any) => {
    return {
        type: DATA_SUCCESS,
        data: data

    }
}
export const fetchDataFailed = (error: any) => {
    return {
        type: DATA_FAILED,
        data: {
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
export const fetchUpdateData = (data: any) => {
    return {
        type: UPDATE_DATA,
        data: data
    }
}
export const fetchDeleteData = (data: any) => {
    return {
        type: DELETE_DATA,
        data: data
    }
}