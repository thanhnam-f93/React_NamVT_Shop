import {
    DATA_REQUEST,
    DATA_SUCCESS,
    DATA_FAILED,
    UPDATE_DATA,
    CREATE_DATA,
    DELETE_DATA,
    SAVE_DATA
} from '../constant/todo'

export const loadData = () => ({
    type: DATA_REQUEST,
});

export const fetchDataSuccess = (data: any) => {
    console.log("Call Action fetchDataSuccess", data);

    return {
        type: DATA_SUCCESS,
        data: data,
        test: "AHAHAH"
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