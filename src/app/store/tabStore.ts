import { create } from "zustand";

type TabType = "repositories" | "starred";

interface TabStore {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
}

export const useTabStore = create<TabStore>((set) => ({
    activeTab: 'repositories',
    setActiveTab: (tab) => set({ activeTab: tab }),
}));