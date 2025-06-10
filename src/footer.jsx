import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p className="text-gray-400 text-lg font-bold">© {year} Keeper</p>
    </footer>
  );
}

export default Footer;
