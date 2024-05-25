"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const navLink = [
  { name: "home", route: "/" },
  { name: "film", route: "/film" },
  { name: "photography", route: "/photography" },
  { name: "blog", route: "/blog" },
  { name: "about", route: "/about" },
  { name: "contact", route: "/contact" },
  { name: "newsletter", route: "/newsletter" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="absolute left-0 right-0 top-0 z-30 flex h-138px w-full items-center justify-center bg-white_color/90 px-16">
      <div className="flex w-full max-w-800px items-center justify-between">
        <Image
          className="ml-4"
          src={"/assets/images/logo.png"}
          width={170}
          draggable={false}
          height={128}
          alt="art by tha-toe"
          priority={false}
        />

        <nav>
          <ul className="flex items-center">
            {navLink.map((item, index) => (
              <li key={index}>
                <Link
                  className={classNames(
                    "px-10px uppercase transition-colors duration-500 hover:text-yellow_color",
                    {
                      "text-cyan_color": item.route === pathname,
                    },
                  )}
                  href={item.route}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
