'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Image from "next/image";
import icon from '../../../public/icon.svg'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-zinc-800">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex max-md:justify-center">
          <Image width={60} height={60} src={icon} alt="icon"/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
            Sobre mi
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#experiencia">
            Experiencia
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
            Tecnologias
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
            Estudios
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
            Sobre mi
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#experiencia">
            Experiencia
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
              Proyectos
            </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
              Tecnologias
            </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#">
              Estudios
            </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
