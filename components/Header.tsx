import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto px-3 sm:px-6 mb-4 sm:mb-6 lg:mb-8 lg:px-12 border-b border-cyan-500 py-2 lg:py-6 flex items-center justify-between gap-2">
      <Link href="/">
        <div className="cursor-pointer flex flex-row justify-center items-center">
          <span className="mr-4">
            <Image
              height="40px"
              width="40px"
              src="/fav.png"
              alt="Logo of the Cubicle blog website"
            />
          </span>
          <h2 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Cubicle
          </h2>
        </div>
      </Link>
      <Link href="https://m3rashid.netlify.app/">
        <a target="_blank" className="cursor-pointer font-semibold text-white">
          Meet Dev
        </a>
      </Link>
    </div>
  );
};

export default Header;
