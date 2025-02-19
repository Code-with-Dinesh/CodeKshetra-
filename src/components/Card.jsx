import React from "react";

const Card = ({ icon, title }) => {
  return (
    <div
      className="bg-zinc-900 cursor-pointer text-white rounded-3xl p-5 w-full max-w-sm mx-auto md:w-1/2 lg:w-1/3 shadow-lg h-52 
            transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white"
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Icon Container */}
        <div className="bg-amber-500 rounded-full p-4 flex items-center justify-center">
          {icon}
        </div>

        {/* Content */}
        <div className="text-center">
          <p className="text-lg font-semibold">{title.heading}</p>
          <p className="text-sm opacity-90 text-zinc-300">{title.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
