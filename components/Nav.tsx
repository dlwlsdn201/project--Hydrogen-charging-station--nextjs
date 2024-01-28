'use client';

import React, { useEffect } from 'react';
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
import Image from 'next/image';
import styled from 'styled-components';

interface IMenu {
  title: string;
  href: string;
}

const menuItems: IMenu[] = [
  { title: '대시보드', href: '/' },
  { title: '충전소 현황', href: '/stations' },
  // { title: '충전소 검색', href: '/search' },
];

const HoverBgProvider = styled.div`
  & :hover {
    background-color: #475569;
  }
  transition: all 1s linear;

  cursor: pointer;
  height: 100%;
`;

const RootNav = () => {
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      maxWidth="full"
      className="text-white bg-slate-800 w-[100%] justify-between items-center"
    >
      <NavbarBrand>
        <Image src="/Logo.png" alt="Logo" width={120} height={60} objectFit="cover" priority />
      </NavbarBrand>
      <NavbarContent className="hidden tablet-lg:flex gap-2" justify="center">
        {menuItems.map((menu: IMenu, index: number) => (
          <HoverBgProvider key={`${menu.title}-${index}`}>
            <NavbarItem key={`${menu.title}-${index}`} className="h-[100%] w-[8rem] text-center rounded-md">
              <Link href={menu.href} className="text-white text-xl h-[100%] py-2 px-4">
                {menu.title}
              </Link>
            </NavbarItem>
          </HoverBgProvider>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle className="tablet-lg:hidden" />
        <NavbarMenu className="bg-transparent gap-8 py-4 justify-center h-[100%]">
          {menuItems.map((item: IMenu, index: number) => (
            <NavbarMenuItem key={`${item.title}-${index}`} onMouseOver={(e) => e.stopPropagation()}>
              <Link
                className="w-full text-white justify-center text-2xl h-[100%]"
                href={item.href}
                onMouseOver={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
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
