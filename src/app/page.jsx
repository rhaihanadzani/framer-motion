import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-full  px-4 sm:px-8 md:px-12 lg:x-20 ">
      {/* Hero Image */}
      <div className="flex justify-center items-center  lg:w-1/2">
        <Image
          src={"/hero.png"}
          alt="hero"
          width={500}
          height={500}
          className="w-[70%]"
        />
      </div>
      {/* Hero Text */}
      <div className=" lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* Tittle */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis?
        </h1>
        {/* Description */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt impedit
          veritatis delectus! Aliquam exercitationem doloribus deleniti ea
          necessitatibus accusamus blanditiis.
        </p>
        {/* Button */}
        <div className="flex w-full gap-4 ">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View my work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}
