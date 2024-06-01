"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Button } from "./ui/moving-border";
            
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",className
      )}
    >
      <Menu setActive={setActive} >
        <div className="flex gap-[35px]">
        <Link href="/">Home</Link>

        <MenuItem setActive={setActive} active={active} item=" Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">SongWriting</HoveredLink>
            <HoveredLink href="/courses ">Music Production</HoveredLink>
          </div>
        </MenuItem>

         <Link href="/"> Our Team</Link>
       {/* <Link href="/live-events"> Live Events</Link> */}
        <Link href="/contact"> Contacts</Link>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
