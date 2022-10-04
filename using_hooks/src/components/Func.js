import { Actions } from "./Actions";
export const reducerFunc = (state, action) => {
  switch (action.type) {
    case Actions.title:
      return { ...state, title: action.payload };
    case Actions.desc:
      return { ...state, desc: action.payload };
    case Actions.ht:
      return { ...state, ht: action.payload };
    case Actions.aps:
      return { ...state, aps: action.payload };
    case Actions.bar:
      return { ...state, bar: action.payload };
    case Actions.category:
      return { ...state, category: action.payload };
    case Actions.image:
      return { ...state, image: action.payload };
      case Actions.modal: return {...state,modal:!state.modal}
    default:
      return state;
  }
};
