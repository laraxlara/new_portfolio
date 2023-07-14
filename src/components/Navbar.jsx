import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="#home" class="mr-5 hover:text-gray-900">
        Home
      </Link>
      <Link href="#about" class="mr-5 hover:text-gray-900">
        About
      </Link>
      <Link href="#projects" class="mr-5 hover:text-gray-900">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
