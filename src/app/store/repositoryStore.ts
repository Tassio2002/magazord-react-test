import { create } from "zustand";

interface Repository {
    id: number;
    name: string;
    owner: {
        login: string;
    };
    description: string | null;
    stargazersQuantity: number;
    forksQuantity: number;
    openIssuesQuantity: number;
    htmlUrl: string;
}

interface RepositoryStore {
    selectedRepo: Repository | null;
    setSelectedRepo: (repo: Repository | null) => void;
}

export const useRepositoryStore = create<RepositoryStore>((set) => ({
    selectedRepo: null,
    setSelectedRepo: (repo) => set({ selectedRepo: repo }),
}));