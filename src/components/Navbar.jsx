import { useContext, useEffect, useState } from "react";

const Navbar = () => {

  const handleInputChange = (e) => {
    filteredProducts(e.target.value);
  };

  return (
    <header className="flex justify-between bg-red-500">
      <img
        src="https://play-lh.googleusercontent.com/nx9IjvLHg3H1b7xJyPBLLZcAG2p4woFFKy7sv2fzLA51b0HOj0hv5tfNMsR4_32nmQ"
        alt=""
        className="w-1/8 h-10"
      />
      <input
        type="text"
        placeholder="Busca tu producto"
        className="outline-none focus:outline-none border-none bg-white text-gray-500 px-2 py-1 w-1/2"
        onChange={handleInputChange}
      />
      <ul className="list-none flex p-1 w-96">
        <li className="mx-2">
          <a href="">facebook</a>
        </li>
        <li className="mx-2">
          <a href="">whatsapp</a>
        </li>
        <li className="mx-2">
          <a href="">IG</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
