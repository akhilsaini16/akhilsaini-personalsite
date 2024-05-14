import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-8">
            <Link href={"/"} className="text-3xl text-white font-semibold">
                LOGO
            </Link>
            <div className="menu">
                <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8">
                    <li>
                        <Link href={"#About"} 
                        className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href={"#about"} 
                        className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={"#about"} 
                        className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white">
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
