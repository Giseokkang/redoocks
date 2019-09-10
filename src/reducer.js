import uuid from "uuid";
import {
  CREATE,
  DELETE,
  COMPLETED,
  UNCOMPLETED,
  EDIT,
  ENABLEEDIT
} from "./actions";

export const initialState = {
  toDos: [],
  completed: [],
  enable: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payLoad, id: uuid() }]
      };
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => toDo.id !== action.payLoad.id),
        completed: state.completed.filter(
          completedToDo => completedToDo.id !== action.payLoad.id
        )
      };
    case COMPLETED:
      return {
        toDos: state.toDos.filter(toDo => toDo.id !== action.payLoad.id),
        completed: [
          ...state.completed,
          state.toDos.find(toDo => toDo.id === action.payLoad.id)
        ]
      };
    case UNCOMPLETED:
      return {
        toDos: [
          ...state.toDos,
          state.completed.find(
            completedToDo => completedToDo.id === action.payLoad.id
          )
        ],
        completed: state.completed.filter(
          completedToDo => completedToDo.id !== action.payLoad.id
        )
      };
    case EDIT:
      const target = state.toDos.find(toDo => toDo.id === action.toDo.id);
      target.text = action.payLoad;
      return {
        ...state,
        toDos: [...state.toDos],
        enable: false,
        id: null
      };
    case ENABLEEDIT:
      return {
        ...state,
        enable: true,
        id: action.payLoad
      };
    default:
      throw new Error();
  }
};

export default reducer;
