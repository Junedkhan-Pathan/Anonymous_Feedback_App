"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { User } from "next-auth";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfilemenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const user: User = session?.user as User;

  const inputRef: any = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProfilemenuOpen, isMenuOpen]);
  return (
    <>
      <nav className="bg-gray-700 text-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative  flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="text-center sm:block px-2 py-1 mx-auto  ">
              <Link href="/" className="text-xl font-bold  ">
                True Feedback
              </Link>
            </div>
            <div className="hidden sm:flex flex-1 items-center justify-center">
              <div className="flex space-x-4 ">
                {user && (
                  <Link
                    href={"/dashboard"}
                    className={
                      pathname === "/dashboard"
                        ? " bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    }
                  >
                    Dashboard
                  </Link>
                )}
                <Link
                  href={"/about"}
                  className={
                    pathname === "/about"
                      ? " bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  About
                </Link>
                <Link
                  href={"/howitwork"}
                  className={
                    pathname === "/howitwork"
                      ? " bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  }
                >
                  How It Work
                </Link>
              </div>
            </div>

            <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!-- Profile dropdown --> */}

              {user ? (
                <div className="relative ml-3">
                  <div
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                    // onClick={profileMenuHandler}
                    className="flex cursor-pointer items-center justify-around gap-1 border px-2 py-1 rounded-full  border-gray-400"
                  >
                    <div className="relative rounded-full bg-gray-800 p-1 text-gray-400 ">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14c3.313 0 6-2.687 6-6s-2.687-6-6-6-6 2.687-6 6 2.687 6 6 6zm0 2c-3.313 0-9 1.687-9 5v1h18v-1c0-3.313-5.687-5-9-5z"
                        />
                      </svg>
                    </div>
                    <span className="p-1 font-medium sm:block hidden ">
                      {user?.username || "You"}
                    </span>
                  </div>
                  {/* Drop down menu of user click */}
                  {isProfilemenuOpen && (
                    <div
                      ref={inputRef}
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        href={"/profile"}
                        onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href={`/verify/${user?.username}`}
                        onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          user?.isVerified
                            ? "pointer-events-none text-gray-700/[0.5]"
                            : ""
                        }`}
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        {user.isVerified ? "Verified" : "Verification"}
                      </Link>

                      <div
                        onClick={() => {
                          signOut();
                          setIsProfileMenuOpen(false);
                        }}
                        className="block cursor-pointer px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                      >
                        Sign out
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link href="/sign-in">
                    <Button
                      className="w-full md:w-auto bg-slate-100 text-black"
                      variant={"outline"}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      className="w-full md:w-auto bg-slate-100 text-black"
                      variant={"outline"}
                    >
                      Sign up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* for mobile  */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu" ref={inputRef}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href={"/dashboard"}
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Dashboard
              </Link>
              <Link
                href={"/about"}
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                About Us
              </Link>
              <Link
                href={"/howitwork"}
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                How It Work
              </Link>
            </div>
          </div>
        )}
      </nav>
      {user && !user?.isVerified && (
        <div
          className="p-2 text-center text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <span className="font-bold">{user?.username}</span> Your account still
          pending to verify, please verify
          <Link
            className="mx-2 underline font-md text-blue-600"
            href={`/verify/${user?.username}`}
          >
            here
          </Link>
          {`otherwise you can't send messages!!`}
        </div>
      )}
    </>
  );
}

export default Navbar;
