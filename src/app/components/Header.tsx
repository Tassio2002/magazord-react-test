import Image from "next/image";
import Logo from "../../../public/Logo.svg"

export default function Header() {
    return (
        <header className="flex items-center pl-81 py-5.25 bg-[#24292E]">
            <Image src={Logo} alt="Github logo" width={124} height={30} />
            <span className="text-2xl px-5.5">/</span>
            <span className="text-2xl">Profile</span>
        </header>
    )
}