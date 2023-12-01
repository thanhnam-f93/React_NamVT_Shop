import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteData,
  setTodoDisplay,
  todoModalHandler,
} from "../../redux/actions/todo";
import Modal from "../../components/reuse/Modal";
function TodoItem({ id, index, status, dateTime, name, description }) {
  const dispatch = useDispatch();

  function deleteItem(): void {
    dispatch(fetchDeleteData(id));
  }

  return (
    <>
      <tr>
        <td className="py-3 ps-4">
          <div className="flex items-center h-5">
            <input
              id="hs-table-pagination-checkbox-all"
              type="checkbox"
              className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
            <label
              htmlFor="hs-table-pagination-checkbox-all"
              className="sr-only"
            ></label>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
          <p>{index + 1}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
          <p>{name}</p>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
          {/* <p>{new Date(dateTime).toISOString().split("T")[0]}</p> */}
          <p>{dateTime}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
          <p>{status}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800 dark:text-gray-200">
          <p>{description}</p>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-end text-base font-medium">
          <button
            type="button"
            onClick={() => {
              dispatch(todoModalHandler());
              dispatch(
                setTodoDisplay({
                  id: id,
                  status: status,
                  dateTime: dateTime,
                  name: name,
                  description: description,
                })
              );
            }}
            className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Detail
          </button>
          <span className="font-extrabold"> | </span>
          <button
            type="button"
            onClick={deleteItem}
            className="inline-flex items-center gap-x-2 text-base font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default TodoItem;
