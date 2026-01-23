'use client';

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram} from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { PiBuildingOffice } from "react-icons/pi";
function fetcher(url: string) {
    return fetch(url).then((res) => res.json());
}

export default function User() {
    const user = useQuery({
        queryKey: ["user"],
        queryFn: () => fetcher("/api/user"),
    });

    if (user.isPending) return <div>Loading...</div>;

    if (user?.data?.error) return <div>Error loading repository list.</div>

    if (user?.data?.lenght === 0) return <div>No repository was found.</div>

    return (
        <div className="pr-16.25">
            <div className="flex flex-col items-center">
                <div className="relative w-40 h-40">
                    <div className="w-full h-full rounded-full p-1">
                        <Image
                            width={150}
                            height={150}
                            src={user.data?.avatar_url}
                            alt="Profile images"
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>

                    <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow">
                        <span className="text-xl">😎</span>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-6 pb-8">
                    <span className="font-bold text-2xl text-[#262626]">{user.data?.name}</ span>
                    <span className="font-normal text-[#989898]">{user.data?.bio}</ span>
                </div>
            </div>
            <div>
                <ul>
                    <li className="pb-4">
                        <div className="flex items-center text-[#0587FF]">
                            <PiBuildingOffice />
                            <span className="pl-2.5">{user.data?.company}</span>
                        </div>
                    </li>
                    <li className="pb-4">
                        <div className="flex items-center text-[#0587FF]">
                            <IoLocationOutline />
                            <span className="pl-2.5">{user.data?.location}</span>
                        </div>
                    </li>
                    <li className="pb-4">
                        <div className="flex items-center text-[#0587FF]">
                            <FaLink />
                            <span className="pl-2.5">{user.data?.blog}</span>
                        </div>
                    </li>
                    <li className="pb-4">
                        <div className="flex items-center text-[#0587FF]">
                            <FaInstagram />
                            <span className="pl-2.5">{user.data?.twitter_username}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}