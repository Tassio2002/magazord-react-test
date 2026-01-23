import { Repos } from "@/types/Repos";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import { PiGitBranchLight } from "react-icons/pi";
import { useRepositoryStore } from "../store/repositoryStore";

export default function RepoItem({
    repo,
    ownerLogin,
    name,
    description,
    starsQuantity,
    forksQuantity
}: Repos) {
    const router = useRouter();
    const { setSelectedRepo } = useRepositoryStore()

    const handleClick = () => {
        setSelectedRepo(repo);
        router.push(`/repositories/${ownerLogin}/${name}`)
    }
    return (
        <div className="flex flex-col cursor-pointer" onClick={handleClick}>
            <div className="text-lg">
                <span className="font-light">{ownerLogin}</span>
                <span className="px-0.5 font-normal">/</span>
                <span className="font-semibold text-[#0587FF]">{name}</span>
            </div>
            <p className="py-2.5 text-sm text-[#989898]">{description}</p>
            <div className="flex gap-8">
                <div className="flex gap-2 items-baseline">
                    <FaStar />
                    <span className="font-normal text-sm">{starsQuantity}</span>
                </div>
                <div className="flex gap-2 items-baseline">
                    <PiGitBranchLight />
                    <span className="font-normal text-sm">{forksQuantity}</span>
                </div>
            </div>
        </div>
    )
}