import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ key, index, status, time, name, des }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  // useEffect(() => {
  //   if (todo.status === "complete") {
  //     setChecked(true);
  //   } else {
  //     setChecked(false);
  //   }
  // }, [todo.status]);

  const handleCheck = () => {
    // setChecked(!checked);
    // dispatch(
    //   updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    // );
  };

  const handleDelete = () => {
    // dispatch(deleteTodo(todo.id));
    // toast.success("Todo Deleted Successfully");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  return (
    <>
      <div className="">
        <h1>TodoItem</h1>
        <div className="">
          <input type="checkbox" checked={checked} onChange={() => {}} />
          <div className="">
            <p className="">Title</p>
            <p className="">Title</p>
            <p className="">Title</p>
            {/* <p className="">{format(new Date(todo.time), "p, MM/dd/yyyy")}</p> */}
          </div>
        </div>
        <div className="">
          <div
            className=""
            onClick={() => handleDelete()}
            onKeyDown={() => handleDelete()}
            tabIndex={0}
            role="button"
          >
            <button>Delete</button>
          </div>
          <div
            className=""
            onClick={() => handleUpdate()}
            onKeyDown={() => handleUpdate()}
            tabIndex={0}
            role="button"
          >
            <button>Update</button>
          </div>
        </div>
      </div>
      {/* <TodoModal
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
        todo={todo}
      /> */}
    </>
  );
}

export default TodoItem;
