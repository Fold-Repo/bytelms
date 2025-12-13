"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Button } from "../ui";
import { NAV_CONSTANT } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="py-4 px-4 z-10 bg-white">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={NAV_CONSTANT.LOGOS.dark}
              className="w-24"
              width={119}
              height={52}
              alt="ByteLMS Logo"
            />
          </Link>

          <div className="flex items-center ">
            <div className="hidden md:flex gap-x-10 lg:gap-x-16 text-sm text-black font-medium">
              {NAV_CONSTANT.NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-block transition-colors",
                    pathname === item.href
                      ? "text-black font-semibold"
                      : "text-black hover:text-warning"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-x-10 lg:gap-x-16 shrink-0">
              {NAV_CONSTANT.NAV_BUTTONS.map((btn) =>
                btn.variant === "link" ? (
                  <div key={btn.href} className="hidden md:flex items-center">
                    <span
                      className="w-px h-6 bg-black mx-8"
                      aria-hidden="true"
                    />
                    <Link
                      href={btn.href}
                      className="text-sm font-medium text-black hover:text-warning"
                    >
                      {btn.label}
                    </Link>
                  </div>
                ) : (
                  <Link
                    key={btn.href}
                    href={btn.href}
                    className="hidden md:block"
                  >
                    <Button className="px-6 py-2 bg-yellow-400">
                      {btn.label}
                    </Button>
                  </Link>
                )
              )}

              <div className="-mr-1 md:hidden relative z-20">
                <Button
                  onPress={() => setOpen(!open)}
                  isIconOnly
                  size="sm"
                  className="bg-transparent border-none"
                >
                  {open ? (
                    <XMarkIcon className="text-black w-6 h-6" />
                  ) : (
                    <Bars3Icon className="text-black w-6 h-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <MobileNav open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
