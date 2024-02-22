"use client";
import React from "react";
import { BackgroundGradient } from "../../../components/ui/Background-gradient";
import Image from "next/image";
import profile from './profile.png'
import avatar from './avatar.png'

export default function ProfileImage() {
  return (
    <div className="max-w-sm">
      <BackgroundGradient className="rounded-full max-lg:w-[250px]">
        <Image
          src={avatar}
          alt="Manuel Latorre"
          className="rounded-full"
        />
      </BackgroundGradient>
    </div>
  );
}
