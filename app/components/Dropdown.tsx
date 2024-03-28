import React from 'react'
// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/

type Submenu = {
    href: string,
    text: string
}

const Dropdown = ( {submenus, dropdown, active} ) => {
  return (
    <ul className={`${dropdown ? "" : "hidden"} absolute z-10 p-5 font-normal dark:bg-gray-700 dark:divide-gray-600`}>
        {submenus.map((submenu: Submenu, index: number) => (
            <li key={index}>
                <a href={submenu.href} className="hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-xl">{submenu.text}</a>
            </li>
        ))}
    </ul>
  );
};

export default Dropdown

// pro to, aby se dropdown otevřel pod sekci bylo nutné `absolute` !!