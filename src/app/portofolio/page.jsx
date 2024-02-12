"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const datas = [
  {
    id: 1,
    tittle: "Santri Go",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minima, tenetur nisi error architecto natus?",
    img: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://santrigo.com/",
    color: "from-blue-300 to-red-300",
  },
  {
    id: 2,
    tittle: "Santri Go",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minima, tenetur nisi error architecto natus?",
    img: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://santrigo.com/",
    color: "from-red-300 to-pink-300",
  },
  {
    id: 3,
    tittle: "Santri Go",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minima, tenetur nisi error architecto natus?",
    img: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://santrigo.com/",
    color: "from-pink-300 to-purple-300",
  },
  {
    id: 4,
    tittle: "Santri Go",
    Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minima, tenetur nisi error architecto natus?",
    img: "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://santrigo.com/",
    color: "from-purple-300 to-blue-300",
  },
];
const page = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div>
      <div className="min-h-[600vh] relative" ref={ref}>
        <div className="h-[calc(100vh-6rem)] w-screen flex items-center justify-center lg:text-8xl text-5xl font-bold text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x: x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-blue-300" />
            {datas.map((data) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${data.color}`}
                key={data.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                    {data.tittle}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-65 lg:w-[500px] lg:h-[300px]">
                    <Image src={data.img} alt={data.tittle} fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg">
                    {data.Desc}
                  </p>
                  <Link href={data.link} className="flex justify-end">
                    <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
                      Lihat Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen min-h-screen flex flex-col gap-16 items-center justify-center text-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl">Do you have a project</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href={"/contact"}
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 right-0 bottom-0 left-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};
export default page;
