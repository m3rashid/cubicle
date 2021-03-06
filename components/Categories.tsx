import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { ICategory } from "../services/types";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 mb-8 shadow-lg rounded-md lg:rounded-lg">
      <div className="bg-gray-700 shadow-lg rounded-md lg:rounded-lg p-3 sm:p-6 lg:p-8">
        <h3 className="text-2xl mb-4 font-semibold border-b border-cyan-500 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          Categories
        </h3>
        {categories.map((category, index: number) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <p className="pb-3 mb-1 text-white cursor-pointer">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
