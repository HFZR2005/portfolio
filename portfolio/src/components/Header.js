import React from 'react';
import Button from "./Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="fixed top-0 w-full bg-secondary flex flex-row border border-b-2 border-black justify-between h-16 px-12 items-center">
      <div className="text-2xl px-20 font-bold">Hifzur</div>
      <nav className="flex space-x-6">
        <a href="#home" className="text-lg text-black hover:underline">Home</a>
        <a href="#about" className="text-lg text-black hover:underline">About</a>
        <a href="#projects" className="text-lg text-black hover:underline">Projects</a>
        <a href="#contact" className="text-lg text-black hover:underline">Contact</a>
      </nav>
      <div className="flex flex-row justify-around w-80">
        <Button Text={"LinkedIn"} Icon={ FaLinkedin } />
        <Button Text={"GitHub"} Icon={FaGithub}/>
      </div>
    </div>
  );
}

export default Header;
