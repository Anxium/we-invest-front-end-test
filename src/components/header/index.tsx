import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { memo, useState } from "react";
import Button from "../button";
import { HeaderProps } from "./index.types";

const Header = ({ button }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { text, mobileText, ...buttonRest } = button;

  return (
    <>
      {/*
        When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars
      */}
      <header
        className={clsx(
          isOpen && "fixed inset-0 z-40 overflow-y-auto",
          "bg-white shadow-sm lg:static lg:overflow-y-visible"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/">
                  <Image
                    height={38}
                    width={38}
                    className="block w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=blue&shade=500"
                    alt="Workflow"
                  />
                </Link>
              </div>
            </div>

            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      <SearchIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                onClick={() => setIsOpen((state) => !state)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon
                  className={clsx(isOpen ? "hidden" : "block", "h-6 w-6")}
                />
                <XIcon
                  className={clsx(isOpen ? "block" : "hidden", "block h-6 w-6")}
                />
              </button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
              <Button size="sm" className="ml-6" {...buttonRest}>
                {text}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {isOpen && (
          <nav className="lg:hidden" aria-label="Global">
            <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6">
              <Button
                fullWidth
                {...buttonRest}
                onClick={() => {
                  setIsOpen(false);
                  button.onClick();
                }}
              >
                {mobileText || text}
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default memo(Header);
