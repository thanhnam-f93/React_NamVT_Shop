import { call, delay, put, take, takeEvery } from "redux-saga/effects";
import {
    loadData,
    fetchDataSuccess,
    fetchDataFailed,
    saveDataInfo,
    fetchCreateData,
    fetchUpdateData,
    fetchDeleteData,
    fetchComingSuccess,
    addMovieCardSuccess,
    loadDataCategory
} from "../actions/movie";
import { Movie } from "../../model/Movie"
import * as taskTypesData from "../constant/movie"
import { callAPIMovie } from "../../service/dataMovie"

import { CONSTANTS } from "../../utils/constant";
import { AxiosError } from "axios";
import { MOVIE_CLEAR } from "../constant/movie";

function* loadAllDataMovie(data: any) {
    try {

        const response = yield call(callAPIMovie.get_all, data.data);
        let totalRecord = response.headers["x-total-count"];
        let totalPage = Math.ceil(totalRecord / 10);
        yield put(fetchDataSuccess(response.data, totalPage));
    } catch (error) {

        yield put(fetchDataFailed(error));
    }

}

function* loadMovieBy(input: any) {
    try {
        const response = yield call(callAPIMovie.get_movie_by, input);
        let totalRecord = response.headers["x-total-count"];
        let totalPage = Math.ceil(totalRecord / 10);
        yield put(fetchDataSuccess(response.data, totalPage));
    } catch (error) {

        yield put(fetchDataFailed(error));
    }
}
function* loadMovieByCategory(input: any) {
    try {
        // yield take(MOVIE_CLEAR)
        const response = yield call(callAPIMovie.get_all_by_category, input.data.page, input.data.category);
        let totalRecord = response.headers["x-total-count"];
        let totalPage = Math.ceil(totalRecord / 10);
        yield put(fetchDataSuccess(response.data, totalPage));

    } catch (error) {

        yield put(fetchDataFailed(error));
    }
}
function* loadMovieComingSoon(input: any) {
    try {
        const response = yield call(callAPIMovie.getMovieComingSoon);
        // let totalRecord = response.headers["x-total-count"];
        // let totalPage = Math.ceil(totalRecord / 10);
        yield put(fetchComingSuccess(response.data, 1));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* addCart(input: any) {
    try {
        yield put(addMovieCardSuccess(input.data));

    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* createData({ payload }: { type: string; payload: Movie }) {
    try {
        const response = yield callAPIMovie.add(payload);
        console.log(response.data);
        // yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* updateData({ data, type }) {
    try {
        const response = yield callAPIMovie.update(data.obj, data.id);
        console.log(response.data);
        // yield put(fetchDataSuccess(response.data));
    } catch (error) {
        yield put(fetchDataFailed(error));
    }
}
function* deleteData({ data, type }) {
    try {
        const response = yield call(callAPIMovie.delete, data)
    } catch (error) {

        yield put(fetchDataFailed(error));
    }
}

function* menuSaga() {
    yield takeEvery(taskTypesData.MOVIE_REQUEST, loadAllDataMovie);
    yield takeEvery(taskTypesData.MOVIE_REQUEST_BY, loadMovieBy)
    yield takeEvery(taskTypesData.MOVIE_REQUEST_CATEGORY, loadMovieByCategory);
    yield takeEvery(taskTypesData.MOVIE_REQUEST_COMINGSOON, loadMovieComingSoon);
    yield takeEvery(taskTypesData.ADD_CART, addCart);
    yield takeEvery(taskTypesData.UPDATE_DATA, updateData);
    yield takeEvery(taskTypesData.DELETE_DATA, deleteData);
    yield takeEvery(taskTypesData.CREATE_DATA, createData);

}
export default menuSaga;
