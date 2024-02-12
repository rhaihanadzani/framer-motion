"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    url: "/",
    title: "Home",
  },

  {
    url: "/about",
    title: "About",
  },

  {
    url: "/portofolio",
    title: "Portofolio",
  },

  {
    url: "/contact",
    title: "Contact",
  },
];
const sosmed = [
  {
    href: "/",
    src: "/github.png",
    alt: "github",
  },
  {
    href: "/",
    src: "/facebook.png",
    alt: "facebook",
  },
  {
    href: "/",
    src: "/instagram.png",
    alt: "instagram",
  },
  {
    href: "/",
    src: "/linkedin.png",
    alt: "linkedin",
  },
  {
    href: "/",
    src: "/pinterest.png",
    alt: "pinterest",
  },
  {
    href: "/",
    src: "/dribbble.png",
    alt: "dribbble",
  },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255, 255, 255)",
  },
};
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};
const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const listItemsVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
};

const NavLink = ({ link }) => {
  const patchName = usePathname();

  return (
    <Link
      className={`p-1 rounded ${
        patchName === link.url ? "bg-black text-white" : ""
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:x-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, i) => (
          <NavLink link={link} key={i} />
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3  xl:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white">Reyy</span>
          <span className="text-black w-16 h-8 bg-white ml-1 rounded flex items-center justify-center ">
            Zoldyck
          </span>
        </Link>
      </div>
      {/* Sosmed */}
      <div className="hidden md:flex gap-4 w-1/3">
        {sosmed.map((sos, i) => (
          <Link href={sos.href} key={i}>
            <Image src={sos.src} alt={sos.alt} width={24} height={24} />
          </Link>
        ))}
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute bg-black left-0 top-0 w-screen h-screen text-white flex justify-center items-center flex-col gap-8 text-4xl z-40"
          >
            {links.map((link, i) => (
              <motion.div key={i} variants={listItemsVariants}>
                <NavLink link={link} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
