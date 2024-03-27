'use client'

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Image from "next/image";
import icon from '../../../public/icon.svg'
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ButtonsLanguages from "@/components/ui/Buttons/ButtonsLanguages";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isEnglish} = useLanguage();

  const closeMenu = () => {
     setIsMenuOpen(false)
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-zinc-800">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand className="flex max-md:justify-center max-md:hidden">
          <Link href={"/"}>
            <Image width={60} height={60} src={icon} alt="icon" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center" className="hidden md:flex gap-4">
        <NavbarItem>
          <Link
            className="text-zinc-300 hover:text-zinc-500 font-semibold"
            href="#sobreMi"
          >
            {isEnglish ? <p>About me</p> : <p>Sobre mi</p>}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-zinc-300 hover:text-zinc-500 font-semibold"
            href="#experiencia"
          >
            {isEnglish ? <p>Experience</p> : <p>Experiencia</p>}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-zinc-300 hover:text-zinc-500 font-semibold"
            href="#projects"
          >
            {isEnglish ? <p>Projects</p> : <p>Proyectos</p>}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-zinc-300 hover:text-zinc-500 font-semibold"
            href="#technologies"
          >
            {isEnglish ? <p>Technologies</p> : <p>Tecnologías</p>}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-zinc-300 hover:text-zinc-500 font-semibold"
            href="#studies"
          >
            {isEnglish ? <p>Studies</p> : <p>Estudios</p>}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="max-md:mr-5">
        <NavbarItem className="p-3">
          <ButtonsLanguages/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-zinc-900">
        
          <Link onClick={closeMenu} href="#sobreMi" className="text-zinc-300 hover:text-zinc-500 font-semibold"
          >
            {isEnglish ? <p>About me</p> : <p>Sobre mi</p>}
          </Link>
        
          <Link onClick={closeMenu} className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#experiencia"
          >
            {isEnglish ? <p>Experience</p> : <p>Experiencia</p>}
          </Link>
        
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#projects" onClick={closeMenu}
          >
            {isEnglish ? <p>Projects</p> : <p>Proyectos</p>}
          </Link>
        
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#technologies" onClick={closeMenu}
          >
            {isEnglish ? <p>Technologies</p> : <p>Tecnologías</p>}
          </Link>
        
          <Link className="text-zinc-300 hover:text-zinc-500 font-semibold" href="#studies" onClick={closeMenu}
          >
            {isEnglish ? <p>Studies</p> : <p>Estudios</p>}
          </Link>
        
      </NavbarMenu>
    </Navbar>
  );
}
