import { call, put, takeEvery } from "redux-saga/effects";
import {
    loadData,
    fetchDataSuccess,
    fetchDataFailed,
    saveDataInfo,
    fetchCreateData,
    fetchUpdateData,
    fetchDeleteData
} from "../actions/todo";
import { Todo } from "../../model/Todo"
import * as taskTypesData from "../constant/todo"
import { callAPITodo } from "../../service/dataTodo";
import { CONSTANTS } from "../../utils/constant";
export type DeleteTodoAction = {
    param: string;
};
export type UpdateTodoAction = {
    id: string;
    data: Todo
};
function* loadAllDataTodo() {
    // console.log("Saga - loadAllDataTodo");
    try {
        const response = yield call(callAPITodo.get_all);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* loadDataTodoByStatus({ data, type }) {
    try {
        // yield put(loadData());
        let response;
        if (data == CONSTANTS.ALL) {
            response = yield call(callAPITodo.get_all);
        } else {
            response = yield callAPITodo.getByStatus(data);
        }

        console.log(response.data);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* createData({ payload }: { type: string; payload: Todo }) {
    try {
        yield put(loadData());
        const response = yield callAPITodo.add(payload);
        console.log(response.data);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* updateData({ data, type }) {
    try {
        const response = yield callAPITodo.update(data.obj, data.id);
        console.log(response.data);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* deleteData({ data, type }) {
    try {
        const response = yield call(callAPITodo.delete, data)
        yield put({ type: taskTypesData.DATA_REQUEST })

    } catch (error) {
        console.log("error deleteData", error);

        yield put(fetchDataFailed(error));
    }
}

function* menuSaga() {


    yield takeEvery(taskTypesData.DATA_REQUEST, loadAllDataTodo);
    yield takeEvery(taskTypesData.DATA_REQUEST_BY, loadDataTodoByStatus);
    yield takeEvery(taskTypesData.UPDATE_DATA, updateData);
    yield takeEvery(taskTypesData.DELETE_DATA, deleteData);
    yield takeEvery(taskTypesData.CREATE_DATA, createData);

}
export default menuSaga;
