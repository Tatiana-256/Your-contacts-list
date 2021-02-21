import { uiActionsType } from "./uiActions";

interface IInitialState {
  openModal: boolean;
}

const initialState: IInitialState = {
  openModal: false,
};

export const uiReducer = (
  state = initialState,
  action: uiActionsType
): IInitialState => {
  switch (action.type) {
    case "ui/OPEN_MODAL":
      return {
        ...state,
        openModal: true,
      };
    case "ui/CLOSE_MODAL":
      return {
        ...state,
        openModal: false,
      };
  }
  return state;
};
