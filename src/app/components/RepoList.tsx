import RepoItem from "./RepoItem";
import { useQuery } from "@tanstack/react-query";

function fetcher(url: string) {
    return fetch(url).then((res) => res.json());
}
export default function RepoList() {
    const repos = useQuery({
        queryKey: ["repos"],
        queryFn: () => fetcher("https://api.github.com/users/Tassio2002/repos")
    });

    if (repos.isPending) return <div>Loading...</div>;

    if (repos?.data?.error) return <div>Error loading repository list.</div>

    if (repos?.data?.length === 0) return <div>No repository was found.</div>
    return (
        <ul className="flex flex-col gap-12">
            {repos.data?.map((repo: any) => ( // tipar corretamente
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

