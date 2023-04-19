import { create } from "zustand";
type BearsState = {
  loged: boolean;
  setLogin: () => void;
  setLogout: () => void;
};
export const useStore = create<BearsState>((set) => ({
  loged: false,
  setLogin: () => set(() => ({ loged: true })),
  setLogout: () => set(() => ({ loged: false })),
}));
