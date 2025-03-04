import Link from "next/link";

export default function Navbar() {
  const items = ['About', 'Projects']
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-90" id="Navbar">
        <div className="flex flex-wrap items-center justify-between mx-auto py-2 sm:py-4 px-4 sm:px-8">
            <a href={"/"} className="text-3xl text-white font-semibold">
                Akhil Saini
            </a>
            <div className="flex sm:p-0 sm:flex-row md:space-x-8">
                {items.map((item) =>(
                    <a
                        className="block py-2 pl-3 sm:text-xl rounded md:p-0 hover:text-white"
                        href={`#${item}`} key={item}
                    >
                        {item}
                    </a>
                ))}
            </div>
        
        </div>
    </nav>
  );
}
