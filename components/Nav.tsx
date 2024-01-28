'use client';

import React from 'react';
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';

interface IMenu {
  title: string;
  href: string;
}

const menuItems: IMenu[] = [
  { title: '대시보드', href: '/' },
  { title: '충전소 현황', href: '/stations' },
  // { title: '충전소 검색', href: '/search' },
];

const RootNav = () => {
  return (
    <Navbar shouldHideOnScroll isBordered className="text-white bg-slate-800 ">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">Logo</p>
      </NavbarBrand>
      <NavbarContent className="hidden tablet-lg:flex gap-10" justify="center">
        {menuItems.map((menu: IMenu, index: number) => (
          <NavbarItem key={`${menu.title}-${index}`}>
            <Link href={menu.href} style={{ color: 'white' }}>
              {menu.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle className="tablet-lg:hidden" />
        <NavbarMenu className="bg-transparent gap-8 py-4 justify-center h-[100%]">
          {menuItems.map((item: IMenu, index: number) => (
            <NavbarMenuItem key={`${item.title}-${index}`}>
              <Link className="w-full text-white justify-center text-2xl" href={item.href}>
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
};

export default RootNav;
