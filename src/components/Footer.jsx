import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-center items-center gap-3 w-full p-2 bg-orange-200">
      <p className="text-gray-700 text-center text-xl">Copyright © 2024</p>
      <a
        href="https://github.com/nikhilpelne20/Cv-Application-v1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-xl" />
      </a>
    </div>
  );
}
