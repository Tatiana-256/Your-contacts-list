import { combineReducers, createStore } from "redux";
import { userReducer } from "./users/usersReducer";
import { uiReducer } from "./uiHandling/uiReduser";

let reducers = combineReducers({
  users: userReducer,
  ui: uiReducer,
});
export const store = createStore(reducers);

// ______type of state___________

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

// ______type of actions___________

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;
