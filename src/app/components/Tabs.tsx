import { BiBookBookmark } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { useTabStore } from "../store/tabStore";


export default function Tabs() {
    const { activeTab, setActiveTab } = useTabStore();
    return (
        <div className="flex gap-14.25">
            <div
                onClick={() => setActiveTab("repositories")}
                className={`pb-2 flex items-center cursor-pointer ${activeTab === "repositories" ? "border-b-2 border-[#FD8C73]" : "text-[#989898]"}`}
            >
                <BiBookBookmark size={24} />
                <span className="pl-5 pr-2 text-lg">Repositories</span>
                <div className="px-4 bg-[#F8F8F8] border border-[#DBDBDB] rounded-[59px]">
                    <span className="text-[#989898]">81</span>
                </div>
            </div>
            <div
                onClick={() => setActiveTab("starred")}
                className={`pb-2 flex items-center cursor-pointer ${activeTab === "starred" ? "border-b-2 border-[#FD8C73]" : "text-[#989898]"}`}>
                <FaRegStar size={24} />
                <span className="pl-5 pr-2 text-lg">Starred</span>
                <div className="px-4 bg-[#F8F8F8] border border-[#DBDBDB] rounded-[59px]">
                    <span className="text-[#989898]">12</span>
                </div>
            </div>
        </div>
    )
}