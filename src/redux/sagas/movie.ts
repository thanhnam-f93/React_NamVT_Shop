import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
    loadData,
    fetchDataSuccess,
    fetchDataFailed,
    saveDataInfo,
    fetchCreateData,
    fetchUpdateData,
    fetchDeleteData,
    fetchComingSuccess
} from "../actions/movie";
import { Movie } from "../../model/Movie"
import * as taskTypesData from "../constant/movie"
import { callAPIMovie } from "../../service/dataMovie"

import { CONSTANTS } from "../../utils/constant";

function* loadAllDataMovie() {
    // console.log("Saga - loadAllDataMovie");
    try {

        const response = yield call(callAPIMovie.get_all);
        console.log("response loadAllDataMovie", response);
        let totalRecord = response.headers["x-total-count"];
        let totalPage = Math.ceil(totalRecord / 10);
        // yield put(fetchDataSuccess({ movies: response.data, totalPage: totalPage }));
        yield put(fetchDataSuccess(response.data, totalPage));
    } catch (error) {

        yield put(fetchDataFailed(error));
    }
}

function* loadMovieBy(input: any) {
    // console.log("Saga - loadAllDataMovie");
    try {

        const response = yield call(callAPIMovie.get_movie_by, input);
        let totalRecord = response.headers["x-total-count"];
        let totalPage = Math.ceil(totalRecord / 10);
        console.log("response", response);
        yield put(fetchDataSuccess(response.data, totalPage));
    } catch (error) {

        yield put(fetchDataFailed(error));
    }
}
function* loadMovieComingSoon(input: any) {
    // console.log("Saga - loadAllDataMovie");
    try {

        const response = yield call(callAPIMovie.getMovieComingSoon);
        // let totalRecord = response.headers["x-total-count"];
        // let totalPage = Math.ceil(totalRecord / 10);
        console.log("response loadMovieComingSoon", response);
        yield put(fetchComingSuccess(response.data, 1));
    } catch (error) {

        yield put(fetchDataFailed(error));
    }
}
function* addCart(input: any) {
    // console.log("Saga - loadAllDataMovie");
    try {

        // const response = yield call(callAPIMovie.getMovieComingSoon);
        // let totalRecord = response.headers["x-total-count"];
        // let totalPage = Math.ceil(totalRecord / 10);
        // console.log("response loadMovieComingSoon", response);
        // yield put(fetchComingSuccess(response.data, 1));
    } catch (error) {

        yield put(fetchDataFailed(error));
    }
}
function* createData({ payload }: { type: string; payload: Movie }) {
    try {
        yield put(loadData());
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
        yield put({ type: taskTypesData.MOVIE_REQUEST })

    } catch (error) {
        console.log("error deleteData", error);

        yield put(fetchDataFailed(error));
    }
}

function* menuSaga() {
    yield takeEvery(taskTypesData.MOVIE_REQUEST, loadAllDataMovie);
    yield takeEvery(taskTypesData.MOVIE_REQUEST_BY, loadMovieBy)
    yield takeEvery(taskTypesData.MOVIE_REQUEST_COMINGSOON, loadMovieComingSoon);
    yield takeEvery(taskTypesData.ADD_CART, addCart);
    yield takeEvery(taskTypesData.UPDATE_DATA, updateData);
    yield takeEvery(taskTypesData.DELETE_DATA, deleteData);
    yield takeEvery(taskTypesData.CREATE_DATA, createData);

}
export default menuSaga;
