import { usersActionsType } from "./usersActions";

export interface IContact {
  id: string;
  photo?: string;
  name: string;
  surname: string;
  number: string;
  description?: string;
}

export interface IState {
  users: IContact[];
}

const initialState: IState = {
  users: [],
};

export const userReducer = (
  state = initialState,
  action: usersActionsType
): IState => {
  switch (action.type) {
    case "user/ADD_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "user/CHANGE_USER_INFO":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id !== action.user.id) {
            return user;
          } else {
            return { ...user, ...action.user };
          }
        }),
      };
    case "user/DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userId),
      };
  }
  return state;
};
