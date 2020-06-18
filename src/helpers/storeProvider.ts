import { createContext } from "react";
import { CanvasStore } from "../stores/canvasStrore";
import { ToolbarStore } from "../stores/toolbarStore";
import { CropperStore } from "../stores/cropperStore";

type Stores = {
  canvasStore: CanvasStore,
  toolbarStore: ToolbarStore,
  cropperStore: CropperStore
}

export const StoreContext = createContext({} as Stores);
export const StoreProvider = StoreContext.Provider;