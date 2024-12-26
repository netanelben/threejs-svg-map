import { atom } from "jotai";
import { Store } from "../types";

export type AppScreen = "first" | "second";

export interface AppAtom {
  currentScreen: AppScreen;
  currentStore: Store | null;
  selectedState: string | null;
}

export const appAtom = atom<AppAtom>({
  currentScreen: "first",
  currentStore: null,
  selectedState: null,
});

export const getCurrentStoreAtom = atom((get) => get(appAtom).currentStore);
export const getSelectedStateAtom = atom((get) => get(appAtom).selectedState);
