'use client'

import React from "react";
import { Meteors } from "../../components/ui/Meteors";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import fs from './images/fs.png'
import { useLanguage } from "@/context/LanguageContext";

export function Fs() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { isEnglish} = useLanguage();

  return (
    <div className="">
      <div className="h-auto w-[300px]  relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-black border border-zinc-900  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

          <h1 className="font-bold text-xl text-white relative z-50">
            {isEnglish ? "Fullstack Web Developer" : "Desarrollo Web Fullstack"}
          </h1>
          <div className=" flex flex-col mb-3">
            <p className="text-zinc-400">{isEnglish ? "March 2023 - July 2023" : "Marzo 2023 - Julio 2023"}</p>
            <p className="text-zinc-400">Henry</p>
          </div>

          <button onClick={onOpen} className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            {isEnglish ? "Certificate" : "Certificado"}
          </button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur" className="bg-zinc-900">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-zinc-300">{isEnglish ? "Fullstack Web Developer" : "Desarrollo Web Fullstack"}</ModalHeader>
              <ModalBody>
                <Image src={fs} alt="dw"/>
              </ModalBody>
              <ModalFooter>
                <Button color="default" onPress={onClose} className="font-semibold">
                  {isEnglish ? "Close" : "Cerrar"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
