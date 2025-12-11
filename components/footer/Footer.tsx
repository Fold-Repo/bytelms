import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { LinkGroup, NavLink } from "../footer/FooterLink";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#E0E0E066] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          {/* Column 1: Brand */}
          <div>
            <h1 className="text-black font-[inter] font-extrabold text-2xl mb-4">
              TestCube
            </h1>
            <p className="text-base font-normal font-sans text-black/70 sm:max-w-xs">
              Helping Nigerian students achieve their academic dreams through
              technology and data-driven learning.
            </p>
          </div>

          {/* Column 2: Product header only */}
          <div>
            <LinkGroup header="Product">
              <NavLink link="/#" label="Features" />
              <NavLink link="/#" label="Pricing" />
              <NavLink link="/#" label="Features" />
            </LinkGroup>
          </div>

          {/* Column 3: TestCube header only */}
          <div>
            <LinkGroup header="TestCube">
              <NavLink link="/#" label="Exam Tips" />
              <NavLink link="/#" label="Syllabus" />
              <NavLink link="/#" label="Success Stories" />
            </LinkGroup>
          </div>

          {/* Column 4: Legal header only */}
          <div>
            <LinkGroup header="Legal">
              <NavLink link="/#" label="Privacy Policy" />
              <NavLink link="/#" label="Terms of Service" />
              <NavLink link="/#" label="Contact Us" />
            </LinkGroup>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm text-neutral-600">
              © 2025 TestCube. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <a href="#" aria-label="X (Twitter)" className="text-black ">
                <FaXTwitter className="size-8" />
              </a>

              <a href="#" aria-label="Facebook" className="text-blue-600">
                <FaFacebook className="size-8" />
              </a>

              <a href="#" aria-label="Instagram" className="text-pink-500 ">
                <FaSquareInstagram className="size-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
