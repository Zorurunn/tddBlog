"use client";
import { LogoSvg } from "../../svg/LogoSvg";
import Link from "next/link";
import { useRef } from "react";
import { NAVBAR_MENU } from "@/common/constants";
import { SearchBlogComponent } from "../SearchBlogComponent";
import { useSearch } from "../providers/SearchDataProvider";
export const Navbar = () => {
  const { searchValue, setSearchValue } = useSearch();

  const searchRef = useRef("");

  const handleSearch = () => {
    setSearchValue(searchRef.current.value);
  };
  const handleChange = () => {
    if (searchRef.current.value === "") {
      setSearchValue(null);
    }
  };
  return (
    <div>
      <div className="w-full  h-[60px]" />

      <div className="fixed top-0 left-0 w-screen bg-gray-50 z-[30] ">
        <div className=" w-screen m-auto max-w-[1100px] px-[16px] z-[30]">
          <nav className="w-full flex justify-between items-center pt-[20px] pb-[20px] z-[30]">
            <div>
              <LogoSvg />
            </div>
            <div className="flex gap-[18px]">
              {NAVBAR_MENU.map((item, index) => {
                return (
                  <Link key={index} href={item.href}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
            <div className="flex gap-2">
              <div className="relative flex">
                <input
                  className="border-[2px] rounded"
                  style={{}}
                  ref={searchRef}
                  type={"search"}
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSearch}>Search</button>
            </div>
          </nav>
          {searchValue ? (
            <SearchBlogComponent searchValue={searchValue} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

{
  /* <nav className="w-full flex justify-between items-center pt-[20px] pb-[20px]">
<div>
    <LogoSvg />
</div>
<div className="flex gap-[18px]">
    {menu.map((item) => {
        return <Link href={item.href}>{item.title}</Link>
    })}
</div>
<div>
    <input
        className="border-[2px] rounded"
        ref={searchRef}
        type={'text'}
        onChange={searching}
    />
    <button onClick={searchClick}>Search</button>
</div>
</nav> */
}
