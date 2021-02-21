import { InferActionsTypes } from "../store";

export type uiActionsType = InferActionsTypes<typeof uiActions>;

export const uiActions = {
  openModal: () => ({ type: "ui/OPEN_MODAL" } as const),
  closeModal: () => ({ type: "ui/CLOSE_MODAL" } as const),
};
