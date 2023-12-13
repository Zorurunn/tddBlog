"use client";
import { BlogSvg } from "../svg/BlogSvg";
import { LogoSvg } from "../svg/LogoSvg";
import { MetaSvg } from "../svg/MetaBlogSvg";
import { UnionSvg } from "../svg/UnionSvg";
import { MenuSvg } from "../svg/MenuSvg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSearch } from "../app/layout";

export const Navbar = (props) => {
  // const [clicked, setClicked] = useState(false);
  // const { darkMode, setDarkMode } = useMode();

  const { searchValue, setSearchValue } = useSearch();

  const searchRef = useRef("");
  const menu = [
    {
      title: "Home",
      href: "/#",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  // useEffect(() => { console.log(`aa`); }, [searchRef.current.value])
  const searching = () => {
    setSearchValue(searchRef.current.value);
  };
  const searchClick = () => {};
  return (
    <div>
      <nav className="w-full flex justify-between items-center pt-[20px] pb-[20px] invisible">
        <div>
          <LogoSvg />
        </div>
        <div className="flex gap-[18px]">
          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div>
          <input
            className="border-[2px] rounded"
            ref={searchRef}
            type={"text"}
            key={"searchClick"}
            onChange={searching}
          />
          <button onClick={searchClick}>Search</button>
        </div>
      </nav>

      <div className="fixed top-0 left-0 w-screen bg-gray-50 z-[30] ">
        <div className=" w-screen m-auto max-w-[1100px] px-[16px] z-[30]">
          <nav className="w-full flex justify-between items-center pt-[20px] pb-[20px] z-[30]">
            <div>
              <LogoSvg />
            </div>
            <div className="flex gap-[18px]">
              {menu.map((item, index) => {
                return (
                  <Link key={index} href={item.href}>
                    {item.title}
                  </Link>
                );
              })}
              {/* <Link href={"../app/blog"} /> */}
            </div>
            <div>
              <input
                className="border-[2px] rounded"
                ref={searchRef}
                type={"text"}
                onChange={searching}
                key={"searching"}
              />
              <button onClick={searchClick}>Edited</button>
            </div>
          </nav>
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
