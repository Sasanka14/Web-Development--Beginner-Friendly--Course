"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="hamburger icon"
            width={36}
            height={36}
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          {/* Logo Link */}
          <Link href="/" className="flex items-center gap-1 px-4 pt-4">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Varta logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-medium text-white">Varta</p>
          </Link>

          {/* Navigation Links */}
          <div className="flex h-[calc(100vh-200px)] flex-col justify-between overflow-y-auto mt-4">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-4 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route ||
                    pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-green-1": isActive }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>

          {/* Footer Message */}
<div className="px-4 py-6 border-t border-gray-700">
  <SheetTitle className="text-sm font-semibold text-gray-300">
    Made with ❤️ by Varta
  </SheetTitle>
  <SheetDescription className="text-xs text-gray-500 mt-2">
    <Link href="/terms" className="text-gray-500 hover:underline">Terms</Link> | 
    <Link href="/privacy" className="text-gray-500 hover:underline"> Privacy</Link> | 
    <Link href="/policy" className="text-gray-500 hover:underline"> Policy & Safety</Link> | 
    <Link href="/how-it-works" className="text-gray-500 hover:underline"> How Varta Works</Link> | 
    <Link href="/test-features" className="text-gray-500 hover:underline"> Test New Features</Link> 
    <br /> © 2024 Varta LLC
  </SheetDescription>
</div>

        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
