import { Repos } from "@/types/Repos";
import { FaStar } from "react-icons/fa";
import { PiGitBranchLight } from "react-icons/pi";

export default function RepoItem({
    ownerLogin,
    name,
    description,
    starsQuantity,
    forksQuantity
}: Repos) {

    return (
        <div className="flex flex-col">
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