"use client";
import { workdata } from "@/lib/data/pageData";
import { getImagePath } from "@/lib/utils/imagePath";
import Image from "next/image";

const Work = () => {
  return (
    <section className="relative py-14">
      <div className="absolute w-full h-full right-auto " />

      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            className="mb-9 capitalize underline"
            style={{
              fontFamily: "Syne, sans-serif",
              color: "#E5E5E5",
              letterSpacing: "2px",
            }}
          >
            WHO WE ARE
          </h2>

          <p
            className="max-w-7xl mx-auto md:text-lg font-normal md:leading-9 leading-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              color: "#E5E5E5",
            }}
          >
            At Kerodev, we go beyond conventional development to craft intelligent,
            future-ready digital solutions that truly make a difference. Blending
            innovation with precision, our team builds high-performance web and
            mobile applications alongside cutting-edge AI systems designed to solve
            complex challenges. We believe in clean code, seamless user
            experiences, and scalable architectures that grow with your business.
            From idea to execution, Kerodev transforms concepts into powerful
            digital products that don’t just function — they stand out, adapt, and
            lead.
          </p>
        </div>

       {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

  {/* Card 1 */}
  <div className="group border border-gray-200 rounded-3xl p-8 md:p-10 h-[320px] flex flex-col justify-between backdrop-blur-lg bg-transparent transition-all duration-500 hover:scale-105 hover:border-blue-500"
  style={{
              fontFamily: "Syne, sans-serif",
              color: "#E5E5E5",
              letterSpacing: "2px",
            }}>
    <h3 className="text-2xl font-semibold text-orange-400 group-hover:text-blue-400 transition">
      Our Mission
    </h3>
    <p className="text-white text-lg leading-7">
      To deliver innovative and scalable digital solutions that empower
      businesses to grow, adapt, and succeed in a fast-changing digital world.
    </p>
  </div>

  {/* Card 2 */}
  <div className="group border border-gray-200 rounded-3xl p-8 md:p-10 h-[320px] flex flex-col justify-between backdrop-blur-lg bg-transparent transition-all duration-500 hover:scale-105 hover:border-blue-500"
  style={{
              fontFamily: "Syne, sans-serif",
              color: "#E5E5E5",
              letterSpacing: "2px",
            }}>
    <h3 className="text-2xl font-semibold text-orange-400 group-hover:text-blue-400 transition">
      Our Vision
    </h3>
    <p className="text-white text-lg leading-7">
      To lead the future of digital innovation by building intelligent
      products that redefine how businesses interact with technology.
    </p>
  </div>

  {/* Card 3 */}
  <div className="group border border-gray-200 rounded-3xl p-8 md:p-10 h-[320px] flex flex-col justify-between backdrop-blur-lg bg-transparent transition-all duration-500 hover:scale-105 hover:border-blue-500"
  style={{
              fontFamily: "Syne, sans-serif",
              color: "#E5E5E5",
              letterSpacing: "2px",
            }}>
    <h3 className="text-2xl font-semibold text-orange-400 group-hover:text-blue-400 transition">
      Our Strategy
    </h3>
    <p className=" text-lg leading-7" >
      We leverage modern tools, creative design, and agile processes to
      build high-performance solutions focused on real business impact.
    </p>
  </div>

</div>
      </div>
    </section>
  );
};

export default Work;