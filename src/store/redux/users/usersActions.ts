import { IContact } from "./usersReducer";
import { InferActionsTypes } from "../store";

export type usersActionsType = InferActionsTypes<typeof usersActions>;

export const usersActions = {
  addNewUser: (user: IContact) => ({ type: "user/ADD_USER", user } as const),
  changeUserInfo: (user: IContact) =>
    ({ type: "user/CHANGE_USER_INFO", user } as const),
  deleteUser: (userId: string) =>
    ({ type: "user/DELETE_USER", userId } as const),
};
