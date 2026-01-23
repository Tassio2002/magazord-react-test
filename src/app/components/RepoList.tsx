import { useMemo } from "react";
import { useTabStore } from "../store/tabStore";
import { useSearchStore } from "../store/searchStore";
import RepoItem from "./RepoItem";
import { useQuery } from "@tanstack/react-query";
import { useFilterStore } from "../store/FilterStore";

function fetcher(url: string) {
    return fetch(url).then((res) => res.json());
}

export default function RepoList() {
    const tabStore = useTabStore();
    const { searchQuery } = useSearchStore();
    const { selectedLanguages, selectedTypes } = useFilterStore();
    const activeTab = tabStore.activeTab
    const reposUrl = activeTab === "repositories" ? "/api/repos" : "/api/starredRepos"

    const repos = useQuery({
        queryKey: ["repos", activeTab],
        queryFn: () => fetcher(reposUrl)
    });

    const filteredRepos = useMemo(() => {
        if (!repos.data) return [];

        let filteredData = repos.data;

        if (searchQuery) {
            filteredData = filteredData.filter((repo: any) =>
                repo.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (!selectedLanguages.includes('all')) {
            filteredData = filteredData.filter((repo: any) =>
                repo.language && selectedLanguages.includes(repo.language.toLowerCase())
            );
        }

        if (!selectedTypes.includes('all')) {
            filteredData = filteredData.filter((repo: any) => {
                if (selectedTypes.includes('sources') && !repo.fork && !repo.mirror_url) return true;
                if (selectedTypes.includes('forks') && repo.fork) return true;
                if (selectedTypes.includes('archived') && repo.archived) return true;
                if (selectedTypes.includes('mirrors') && repo.mirror_url) return true;
                return false;
            });
        }

        return filteredData;
    }, [repos.data, searchQuery, selectedLanguages, selectedTypes]);

    if (repos.isPending) return <div>Loading...</div>;

    if (repos?.data?.error) return <div>Error loading repository list.</div>

    if (repos?.data?.length === 0) return <div>No repository was found.</div>
    return (
        <ul className="flex flex-col gap-12 pt-10">
            {filteredRepos.map((repo: any) => ( // tipar corretamente
                <li key={repo.id}>
                    <RepoItem
                        ownerLogin={repo.owner.login}
                        name={repo.name}
                        description={repo.description}
                        starsQuantity={repo.stargazers_count}
                        forksQuantity={repo.forks_count}
                    />
                </li>
            ))}
        </ul>
    )
}

