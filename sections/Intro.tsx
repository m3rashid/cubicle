import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
        Welcome to Cubicle
      </h1>
      <div className="py-2 px-12">
        <h3 className="text-white text-center text-md">
          Cubicle is an online portal for techies which mainly focuses on the
          life of programmers in general. It also features coding tips, tricks
          and motivation
        </h3>
      </div>
    </div>
  );
};

export default Intro;
