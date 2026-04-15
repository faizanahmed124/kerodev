"use client";
import { Featuresdata } from "@/lib/data/pageData";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";


const Features = () => {
  return (
    <section id="features-section" className="scroll-mt-90">
      <div className="container relative">
        <div className=" absolute w-full h-full top-0 -left-1/4 blur-390"></div>
        <div className=" gap-x-4 gap-y-4 relative z-10">
          {/* Column-1 */}
          <div className="mb-10">
            <h2 className="font-semibold mb-6 text-center max-w-2xl mx-auto sm:leading-14  uppercase text-blue-300">
                Technologies we <br /> work on
            </h2>
            <p className="text-white/40 text-center">
              We specialize in a wide range of technologies to deliver cutting-edge solutions.
            </p>
     

<div className="flex flex-col items-center justify-center gap-10 pt-4 md:pt-10 text-lightpurple">

  {/* Row 1 - 2 icons */}
  <div className="grid grid-cols-2 gap-12">
    <Icon icon="simple-icons:adobexd" className="text-7xl" />
    <Icon icon="logos:figma" className="text-7xl" />
  </div>

  {/* Row 2 - 4 icons */}
  <div className="grid grid-cols-4 gap-12">
    <Icon icon="logos:javascript" className="text-7xl rounded-md" />
    <Icon icon="simple-icons:express" className="text-7xl" />
    <Icon icon="logos:html-5" className="text-7xl" />
    <Icon icon="logos:tailwindcss-icon" className="text-7xl" />
  </div>

  {/* Row 3 - 4 icons */}
  <div className="grid grid-cols-4 gap-12">
    <Icon icon="logos:vitejs" className="text-7xl" />
    <Icon icon="logos:django-icon" className="text-7xl" />
<Icon icon="mdi:cloud-outline" className="text-7xl" />
    <Icon icon="logos:nodejs-icon" className="text-7xl" />
  </div>

  {/* Row 4 - 2 icons */}
  <div className="grid grid-cols-3 gap-12">
    <Icon icon="logos:python" className="text-7xl" />
    <Icon icon="simple-icons:tensorflow" className="text-7xl" />
        <Icon icon="logos:aws" className="text-7xl" />

  </div>

</div>
          </div>
          {/* Column-2 */}
          <div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-10 gap-y-4 -right-1/4">
              {Featuresdata?.map((items, i) => (
                <div
                  className="bg-darkmode p-8 rounded-lg flex flex-col gap-3"
                  key={i}
                >
                  <div className="rounded-full bg-linear-to-r from-primary to-secondary w-fit p-4 flex items-center justify-center">
                    <Image
                      src={items.imgSrc}
                      alt={items.imgSrc}
                      width={60}
                      height={60}
                      className="w-auto"
                    />
                  </div>
                  <h5 className="text-white/80 text-lg font-medium capitalize">
                    {items.heading}
                  </h5>
                  <p className="text-white/40 text-sm font-normal">
                    {items.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
