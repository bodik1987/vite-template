import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface UiState {
  openNotesPage: boolean;
  setOpenNotesPage: (value: boolean) => void;
  openBottomSheet: boolean;
  setOpenBottomSheet: (value: boolean) => void;
  contentKey: string;
  setContentKey: (value: string) => void;
}

// Стор для хранения UI состояний
export const useUIStore = create<UiState>((set) => ({
  // Страница с заметками
  openNotesPage: false,
  setOpenNotesPage: (value: boolean) => set({ openNotesPage: value }),
  // Нижнее меню
  openBottomSheet: false,
  setOpenBottomSheet: (value: boolean) => set({ openBottomSheet: value }),
  // Ключ содержимого нижнего меню
  contentKey: "",
  setContentKey: (value: string) => set({ contentKey: value }),
}));