import { create } from "zustand";

interface FilterStore {
    selectedLanguages: string[];
    selectedTypes: string[];
    setSelectedLanguages: (languages: string[]) => void;
    setSelectedTypes: (types: string[]) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
    selectedLanguages: ['all'],
    selectedTypes: ['all'],
    setSelectedLanguages: (languages) => set({ selectedLanguages: languages }),
    setSelectedTypes: (types) => set({ selectedTypes: types }),
}))