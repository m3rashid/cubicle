import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="container mx-auto px-3 sm:px-6 mb-4 sm:mb-6 lg:mb-8 lg:px-12 border-b border-red-500 py-2 lg:py-6 flex items-center justify-between gap-2">
      <Link href="/">
        <div className="cursor-pointer flex flex-row justify-center items-center">
          <span className="mr-4"><Image height="40px" width="40px" src="/favicon.ico" alt="" /></span>
          <h1 className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Cubicle</h1>
        </div>
      </Link>
      <Link href="https://m3rashid.netlify.app/">
        <a target="_blank" className="text-white cursor-pointer font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Meet Dev</a>
      </Link>
    </div>
  );
};

export default Header;
