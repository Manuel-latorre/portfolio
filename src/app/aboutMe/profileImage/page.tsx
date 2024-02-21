"use client";
import React from "react";
import { BackgroundGradient } from "../../../components/ui/Background-gradient";
import Image from "next/image";
import profile from './profile.png'

export default function ProfileImage() {
  return (
    <div className="max-w-sm">
      <BackgroundGradient className="rounded-full max-w-sm bg-zinc-950 max-lg:w-[250px]">
        <Image
          src={profile}
          alt="Manuel Latorre"
          
        />
      </BackgroundGradient>
    </div>
  );
}
