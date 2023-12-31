import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCreateData, loadData } from "../../redux/actions/todo";
import TodoItem from "./TodoItem";
import { CONSTANTS } from "../../utils/constant";
import ListboxStatus from "./ListboxStatus";
import Modal from "../../components/reuse/Modal";

const TodoApp = () => {
  const [searchBy, setSearchBy] = useState(CONSTANTS.ALL);
  // get all data when start page - No search, default page = 1
  const dispatch = useDispatch();
  const dataTodo = useSelector((state: any) => {
    // console.log("Begine state ", state.todo);

    return state.todo.listTodo;
  });

  useEffect(() => {
    dispatch(loadData());
  }, []);

  const renderTodo = dataTodo?.map((item: any, index: number) => {
    return (
      <TodoItem
        key={index}
        index={index}
        id={item.id}
        status={item.status}
        name={item.name}
        description={item.description}
        dateTime={item.dateTime}
      />
    );
  });

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <div className="py-3 px-4 inline-flex">
              <div className="pl-2">
                <ListboxStatus setSearchBy={setSearchBy} />
              </div>
              <div className="pl-2">
                <button onClick={() => {}}></button>
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="py-3 px-4 pe-0">
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
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Index
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Description
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-bold text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {dataTodo?.length > 0 ? (
                    renderTodo
                  ) : (
                    <tr className="text-center">
                      <td>No Country</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default TodoApp;
