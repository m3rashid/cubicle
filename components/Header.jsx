import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <Link href="/">
      <div className="container mx-auto px-3 sm:px-6 mb-4 sm:mb-6 lg:mb-8 lg:px-12 border-b border-red-500 py-2 lg:py-6 flex items-center">
        <span className="mr-4"><Image height="40px" width="40px" src="/favicon.ico" alt="" /></span>
        <span className="cursor-pointer font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Cubicle</span>
      </div>
    </Link>
  );
};

export default Header;
