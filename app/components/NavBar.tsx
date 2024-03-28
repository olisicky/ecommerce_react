'use client'
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Men", href: "/men" },
  { text: "Women", href: "/women" },
  { 
    text: "About Us",
    href: "/about", 
    submenu: [
      {
        text: "Contact",
        href: "/about/#Contact"
      },
      {
        text: "Blog",
        href: "/about/#Blog"
      }
  ]},
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav className='bg-gray-50 dark:bg-gray-700'>
        <div className="max-w-screen-xl flex mx-5 p-4 pt-10">
            <Link href={"/"} className="flex flex-initial items-center space-x-3 rtl:space-x-reverse">
                <img src='/logo.svg' className="h-20" alt="Shop Logo"/>
            </Link>
            <span className="self-center mx-5 text-2xl flex-initial font-semibold whitespace-nowrap dark:text-white">U Marušky</span>
        </div>

        <div className={`${navActive ? "active" : ""} items-center pb-5 justify-center hidden w-10 md:flex md:w-auto md:order-1 text-3xl`}>
            {MENU_LIST.map((menu, idx) => (
            <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(true);
                }}
                key={menu.text}
            >
                {/* <NavItem active={activeIdx === idx} {...menu} /> */}
                <NavItem {...menu} active={activeIdx === idx}/>
            </div>
            ))}
        </div>
    </nav>
  );
};

export default Navbar;