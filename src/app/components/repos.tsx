'use client';

import { useQuery } from "@tanstack/react-query";
import Tabs from "./Tabs";

function fetcher(url: string) {
    return fetch(url).then((res) => res.json());
}

export default function Repos() {
    const repos = useQuery({
        queryKey: ["repos"],
        queryFn: () => fetcher("https://api.github.com/users/Tassio2002/repos")
    });

    if (repos.isPending) return <div>Loading...</div>;

    if (repos?.data?.error) return <div>Error loading repository list.</div>

    if (repos?.data?.lenght === 0) return <div>No repository was found.</div>

    return (
        <div>
            <Tabs />
            <ul>
                {repos.data?.map((repo: any) => ( // tipar corretamente
                    <li key={repo.id}>
                        {repo.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}