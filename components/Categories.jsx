import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-gray-700 shadow-lg rounded-md p-3 sm:p-6 lg:p-8 mb-8">
      <h3 className="text-2xl mb-4 font-semibold border-b border-red-500 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Categories</h3>
      {categories.map((category, index) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <p className="pb-3 mb-1 text-white cursor-pointer">{category.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
