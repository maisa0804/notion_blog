"use client"

import { useState } from "react"
import { IoSearchOutline } from "react-icons/io5"

const SearchBar = () => {

  const [openBar, setOpenBar] = useState<boolean>(false)

  return (
    <div className="search flex items-end gap-2 max-w-[300px] sm:w-[350px] h-12 relative">
      <input
        type="text"
        className={`${openBar ? "block" : "hidden"} border-b-[1px] py-4 pl-2 border-gray-400 border-opacity-40 w-full`}
        placeholder="Search articles" />
      <IoSearchOutline className="cursor-pointer my-4 absolute right-0 " size={20} onClick={() => setOpenBar(!openBar)} />
    </div>
  )
}

export default SearchBar
