import React from "react";
import uuid from "uuid";
import { useDispatch, useState } from "../context";
import { DELETE, COMPLETED, UNCOMPLETED, ENABLEEDIT } from "../actions";
import Edit from "./Edit";

const List = ({ title, stateArr, isCompleted }) => {
  const state = useState();
  const dispatch = useDispatch();

  return (
    <>
      {stateArr && stateArr.length > 0 && (
        <>
          <h1>{title}</h1>
          {stateArr.map(item => (
            <li key={uuid()}>
              <span>{item.text}</span>
              {state.enable && item.id === state.id && <Edit toDo={item} />}
              {state.id !== item.id && (
                <>
                  <button
                    onClick={() => dispatch({ type: DELETE, payLoad: item })}
                  >
                    X
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: isCompleted ? UNCOMPLETED : COMPLETED,
                        payLoad: item
                      })
                    }
                  >
                    {isCompleted ? "Unmount" : "O"}
                  </button>

                  {!isCompleted && (
                    <button
                      onClick={() =>
                        dispatch({ type: ENABLEEDIT, payLoad: item.id })
                      }
                    >
                      Edit
                    </button>
                  )}
                </>
              )}
            </li>
          ))}
        </>
      )}
    </>
  );
};

export default List;
