import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todoModalHandler,
  fetchCreateData,
  fetchUpdateData,
} from "../../redux/actions/todo";
const Modal = () => {
  const dispatch = useDispatch();
  // get status display Modal
  const statusModal = useSelector((state: any) => {
    return state.todo.modalDisplay;
  });
  // get data display on Modal
  const todoModal = useSelector((state: any) => {
    return state.todo.todoModal;
  });

  // data change on Modal
  const [objTodo, setObjTodo] = useState({});

  useEffect(() => {
    // console.log("Component did mount11111", objTodo);

    setObjTodo(objTodo);
    // console.log("Component did mount22222", objTodo);
  }, [statusModal]);

  return (
    <>
      {statusModal && (
        <div
          className=" transition duration-150 ease-in-out z-10 absolute top-40 right-0 bottom-0 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <label
                htmlFor="name"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Name
              </label>
              <input
                id="name"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="In Put Title"
                defaultValue={todoModal.name}
                onChange={(e) => {
                  setObjTodo({ ...objTodo, name: e.target.value });
                  console.log("TOF", objTodo);
                }}
              />
              <label
                htmlFor="des"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Description
              </label>
              <input
                id="des"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Description"
                defaultValue={todoModal.description}
                onChange={(e) => {
                  console.log("obj Orifgin ", objTodo);
                  setObjTodo({ ...objTodo, description: e.target.value });
                }}
              />
              <label
                htmlFor="expiry"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Expiry Date
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-calendar-event"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                </div>
                <input
                  id="expiry"
                  className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="MM/YY"
                  defaultValue={todoModal.dateTime}
                  onChange={(e) => {
                    setObjTodo({ ...objTodo, dateTime: e.target.value });
                  }}
                />
              </div>
              <label
                htmlFor="cvc"
                className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
              >
                Status
              </label>
              <div className="relative mb-5 mt-2">
                <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-info-circle"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    <polyline points="11 12 12 12 12 16 13 16"></polyline>
                  </svg>
                </div>
                <select
                  name="cvc"
                  id="cvc"
                  className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  value={todoModal.status}
                  onChange={(e) => {
                    setObjTodo({ ...objTodo, status: e.target.value });
                  }}
                >
                  <option value="Completed">Completed</option>
                  <option value="Improgess">Improgess</option>
                </select>
              </div>
              <div className="flex items-center justify-start w-full">
                <button
                  onClick={() => {
                    dispatch(fetchUpdateData(objTodo, objTodo.id));
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                >
                  Update
                </button>
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={() => {
                    dispatch(todoModalHandler());
                  }}
                >
                  Cancel
                </button>
              </div>
              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                onClick={() => {
                  dispatch(todoModalHandler());
                }}
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
