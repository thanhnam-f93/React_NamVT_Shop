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
    console.log("Saga - loadAllDataTodo");
    try {
        // yield put(loadData());
        const response = yield callAPITodo.get_all();
        console.log("from saga", response.data);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* loadDataTodoByStatus({ payload }: { type: string; payload: DeleteTodoAction }) {
    try {
        // yield put(loadData());
        const response = yield callAPITodo.getByStatus(payload.param);
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
function* updateData({ payload }: { type: string; payload: UpdateTodoAction }) {
    try {
        yield put(loadData());
        const response = yield callAPITodo.update(payload.id, payload.data);
        console.log(response.data);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* deleteData({ payload }: { type: string; payload: DeleteTodoAction }) {
    try {
        yield put(loadData());
        const response = yield callAPITodo.delete(payload.param);
        console.log(response.data);
        yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}

function* menuSaga() {
    console.log("Call menuSaga");

    yield takeEvery(taskTypesData.DATA_REQUEST, loadAllDataTodo);
    yield takeEvery(taskTypesData.DATA_REQUEST_BY, loadDataTodoByStatus);
    yield takeEvery(taskTypesData.UPDATE_DATA, updateData);
    yield takeEvery(taskTypesData.DELETE_DATA, deleteData);
    yield takeEvery(taskTypesData.CREATE_DATA, createData);

}
export default menuSaga;
