'use client';

import { useQuery } from "@tanstack/react-query";

function fetcher(url: string) {
    return fetch(url).then((res) => res.json());
}

export default function User() {
    const user = useQuery({
        queryKey: ["user"],
        queryFn: () => fetcher("https://api.github.com/users/Tassio2002")
    });

    if (user.isPending) return <div>Loading...</div>;

    if (user?.data?.error) return <div>Error loading repository list.</div>

    if (user?.data?.lenght === 0 ) return <div>No repository was found.</div>
    
    return (
        <div>
            {user.data?.name}
        </div>
    )
}