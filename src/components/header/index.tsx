import Link from "next/link";
import Search from "./search";

const Header = () => {
  return (
    <header className="w-full flex items-center flex-col lg:flex-row justify-between font-bold pt-16 pb-32">
      <div className="text-2xl mr-20">LOGO</div>
      <ul className="header-list p-4 flex flex-wrap w-full justify-center lg:justify-start space-x-4">
        <li className="text-md tracking-wide hover:text-gray-500 duration-200 inline-block"><Link href="/">Web development</Link></li>
        <li className="text-md tracking-wide hover:text-gray-500 duration-200 inline-block"><Link href="/">Web design</Link></li>
      </ul>
      <Search />
    </header>
  )
}

export default Header

