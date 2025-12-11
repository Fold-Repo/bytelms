"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { NAV_CONSTANT } from "@/constants";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const MobileNav: React.FC<Props> = ({ open, setOpen }) => {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // Lock body scroll when open and restore on close
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  // Focus first link when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => firstLinkRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          open
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <aside
        role="dialog"
        aria-modal={open}
        className={`fixed top-0 right-0 h-screen w-full sm:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src={NAV_CONSTANT.LOGOS.dark}
              width={120}
              height={48}
              alt="ByteLMS"
            />
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="px-6 py-6">
          <nav className="flex flex-col gap-4">
            {NAV_CONSTANT.NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-black"
                ref={i === 0 ? firstLinkRef : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3">
            {NAV_CONSTANT.NAV_BUTTONS.map((btn) =>
              btn.variant === "link" ? (
                <Link
                  key={btn.href}
                  href={btn.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-center font-medium text-black"
                >
                  {btn.label}
                </Link>
              ) : (
                <Link
                  key={btn.href}
                  href={btn.href}
                  onClick={() => setOpen(false)}
                  className="block text-center px-4 py-2 rounded-md bg-yellow text-white font-medium"
                >
                  {btn.label}
                </Link>
              )
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileNav;
