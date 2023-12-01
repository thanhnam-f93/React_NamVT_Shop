import {
    DATA_REQUEST,
    DATA_SUCCESS,
    DATA_FAILED,
    UPDATE_DATA,
    CREATE_DATA,
    DELETE_DATA,
    SAVE_DATA,
    TODO_MODAL_HANDLER,
    TODO_DISPLAY,
    DATA_REQUEST_BY
} from '../constant/todo'

export const loadData = () => ({
    type: DATA_REQUEST,
});
export const loadDataBy = (status: string) => ({
    type: DATA_REQUEST_BY,
    data: status
});


export const fetchDataSuccess = (data: any) => {
    // console.log("Call Action fetchDataSuccess", data);

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
export const todoModalHandler = () => {
    return {
        type: TODO_MODAL_HANDLER,
    }
}

export const setTodoDisplay = (data) => {
    return {
        type: TODO_DISPLAY,
        todoModal: data
    }
}