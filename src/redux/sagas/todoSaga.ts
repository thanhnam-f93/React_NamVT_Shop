// import { call, put, takeEvery } from "redux-saga/effects";
// import {
//   fetchListMenusFailed,
//   fetchListMenusSuccess,
//   loadMenus,
//   fetchListMenusRequest,
//   savelistMenus,
// } from "../actions/dataAction";
// import * as taskTypesData from "../../utils/constant/actionConstanst";
// import { callAPITodo } from "../../service/dataTodo";
// import { CONSTANTS } from "../../utils/constant";


// function* createData({ payload }) {
//   try {
//     yield put(fetchDataRequest());
//     const response = yield Todo(add, [CONSTANTS.PAGE.TODO, payload]);
//     yield put()
//     yield put(fetchDataSuccess());
//   } catch (error) {
//     yield put(fetchInputFailed(error));
//   }
// }
// function* getLoadInput({ payload }) {
//   try {
//     yield put(fetchInputRequest());
//     const response = yield call(getApi1, [`/getModalByButton/${payload}`]);
//     yield put(fetchInputSuccess());
//     yield put(fetchSaveValueInput(response.data));
//   } catch (error) {
//     yield put(fetchInputFailed(error));
//   }
// }
// function* fetchUpdateMenu({ data }) {

//   try {
//     yield put(fetchListMenusRequest());
//     const response = yield call(getApi2, [`/menu`, data.data.menu[0]]);
//     yield put(fetchListMenusSuccess(response));
//     yield put(fetchListMenusRequest());
//     let response1;
//     for (let i = 0; i < data.data.buttons.length; i++) {
//       response1 = yield call(getApi2, [`/button`, data.data.buttons[i]]);
//       yield put(fetchListMenusSuccess(response1));
//     }
//     if (response.status == 200 && response1.status == 200) {
//       yield put(fetchListMenusSuccess());
//       data.history.push("/admin/list-menu");
//       data.Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Sửa Menu thành công",
//         showConfirmButton: false,
//         timer: 1000,
//       });
//     }
//   } catch (error) {
//     yield put(fetchListMenusFailed(error));
//     yield put(fetchListMenusFailed(error));
//     data.history.push("/admin/list-menu");
//     data.Swal.fire({
//       position: "center",
//       icon: "error",
//       title: "Có lỗi xin mời bạn thử lại",
//       showConfirmButton: false,
//       timer: 1000,
//     });
//   }
// }
// function* checkTotalMenu({ data }) {
//   console.log(data);
//   let email = localStorage.getItem("email");
//   try {
//     yield put(fetchListMenusRequest());
//     const response = yield call(getApi, [`/getBasicPro/${email}`]);
//     if (response.data == "OK") {
//       yield put(fetchListMenusSuccess());
//       data.history.push("/admin/create-menu");
//     } else {
//       yield put(fetchListMenusFailed());
//       data.Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Tài khoản này tối đa là 5 Menu, bạn phải nâng cấp tài khoản để được tạo mới",
//         footer: '<a href="">Why do I have this issue?</a>',
//       });
//     }
//   } catch (error) {
//     yield put(fetchListMenusFailed(error));
//   }
// }
// function* createMenu({ data }) {
//   try {
//     yield put(fetchListMenusRequest());
//     const response = yield call(getApi1, [`/button`, data.data]);
//     console.log(response);
//     if (response.status == 200) {
//       yield put(fetchListMenusSuccess());
//       data.history.push("/admin/list-menu");
//       data.Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Tạo Menu thành công",
//         showConfirmButton: false,
//         timer: 1000,
//       });
//     } else {
//       yield put(fetchListMenusFailed());
//       data.history.push("/admin/list-menu");
//       data.Swal.fire({
//         position: "center",
//         icon: "error",
//         title: "Tạo Menu không thành công",
//         showConfirmButton: false,
//         timer: 1000,
//       });
//     }
//   } catch (error) {
//     yield put(fetchListMenusFailed(error));
//     data.history.push("/admin/list-menu");
//     data.Swal.fire({
//       position: "center",
//       icon: "error",
//       title: "Có lỗi xin mời bạn thử lại",
//       showConfirmButton: false,
//       timer: 1000,
//     });
//   }
// }

// function* menuSaga() {
//   yield takeEvery(taskTypesData.DATA_REQUEST, getDataByUsers);
//   yield takeEvery(taskTypesData.DATA_SUCCESS, getDataInfo);
//   yield takeEvery(taskTypesData.DATA_FAILED, createData);
//   yield takeEvery(taskTypesData.DATA_REQUEST, getDataByUsers);
//   yield takeEvery(taskTypesData.UPDATE_DATA, getDataInfo);
//   yield takeEvery(taskTypesData.DELETE_DATA, createData);
//   yield takeEvery(taskTypesData.CREATE_DATA, createData);
// }
// export default menuSaga;
// DATA_REQUEST,
//   DATA_SUCCESS,
//   DATA_FAILED,
//   UPDATE_DATA,
//   CREATE_DATA,
//   DELETE_DATA,
//   SAVE_DATA