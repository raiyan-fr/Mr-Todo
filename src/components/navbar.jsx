import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around text-white bg-teal-900 py-2.5">
      <div className="Logo">
        <span className="font-bold text-xl mx-10">Mr Todo</span>
      </div>
      <ul className="flex gap-8 mx-10 ">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">
          Your Task
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
