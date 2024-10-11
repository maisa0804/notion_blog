import Search from "./search";

const Header = () => {
  return (
    <header className="w-full flex items-center flex-col lg:flex-row justify-between font-bold py-12 px-10">
      <div className="text-2xl">LOGO</div>
      <Search />
    </header>
  )
}

export default Header

