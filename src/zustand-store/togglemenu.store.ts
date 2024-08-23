import { create } from "zustand";

interface ToggleStoreProps {
  isOpenMenu: boolean;
  setisOpenMenu: () => void;
}

export const toggleMenuStore = create<ToggleStoreProps>()((set) => ({
  isOpenMenu: true,
  setisOpenMenu: () => set((state) => ({ isOpenMenu: !state.isOpenMenu })),
}));
