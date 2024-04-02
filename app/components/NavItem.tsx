// import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";

// const NavItem = ({ text, href, active }) => {
//     return (
//       <Link href={href} className="text-gray-900 mx-6 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">
//           {text}
//       </Link>
//     );
//   };
  

type Submenu = {
  text: string;
  href: string
}

type Items = {
  text: string;
  href: string;
  submenu?: Submenu[]
}

const NavItem = ( items: Items, active ) => {

  // Vytvoření state variable, která bude hlídat, zda je dropdown aktivní nebo ne. Ta bude dána do className
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="list-none text-gray-900 mx-6 dark:text-white">
      {items.submenu ? (
        <>
          <button 
              type="button"
              onClick={() => setDropdown((prev) => !prev)}
              className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
          >
            {items.text}{' '}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} active={active}/>
        </>
      ) : (
        <a href={items.href} className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500">{items.text}</a>
      )}
    </li>
  );
};

export default NavItem;