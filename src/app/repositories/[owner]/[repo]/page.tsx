'use client'
import { useRepositoryStore } from "@/app/store/repositoryStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

async function fetchRepositoryDetails(owner: string, repo: string) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
    if (!response.ok) throw new Error('Failed to fetch');
    return response.json();
}

export default function RepositoryDetails({
    params
}: {
    params: { owner: string, name: string }
}) {
    const router = useRouter();
    const { selectedRepo } = useRepositoryStore();

    const { data: repoDetails, isLoading } = useQuery({
        queryKey: ['repoDetails', params.owner, params.name],
        queryFn: () => fetchRepositoryDetails(params.owner, params.name),
        initialData: selectedRepo,
    });


    if (isLoading) return <div>Loading...</div>;
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-300">
                <div className="flex justify-between">
                    <h2 className="text-3xl">github_explorer</h2>
                    <button
                        onClick={() => router.back()}
                        className="text-blue-600 hover:underline cursor-pointer flex gap-2 items-center"
                    >
                        <IoIosArrowBack size={20} />
                        Voltar
                    </button>
                </div>
                <div className="flex flex-col gap-4 pt-6">
                    <h1 className="text-3xl font-bold">{repoDetails?.owner.login}/{repoDetails?.name}</h1>
                    <p className="text-[#989898]">{repoDetails?.description || 'No description'}</p>
                </div>
                <div className="flex gap-28 pt-6">
                    <div className="flex flex-col gap-4">
                        <span className="text-3xl font-bold">{repoDetails?.stargazers_count.toLocaleString()}</span>
                        <span className="text-[#989898]">Stars</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-3xl font-bold">{repoDetails?.forks_count.toLocaleString()}</span>
                        <span className="text-[#989898]">Forks</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-3xl font-bold">{repoDetails?.open_issues_count.toLocaleString()}</span>
                        <span className="text-[#989898]">Issues abertas</span>
                    </div>
                </div>
            </div>
        </div>
    )
}