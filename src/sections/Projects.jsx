import React from "react";
import Image from "next/image";
import utopia from "../../public/images/utopia.jpeg";
import restaurant from "../../public/images/restaurant.jpg";
import beer from "../../public/images/beer.jpg";
import limo from "../../public/images/limo.jpg";
import branding from "../../public/images/branding.jpg";
import iceland from "../../public/images/iceland.jpg";
import space from "../../public/images/space.jpg";
import larawind from "../../public/images/larawind.png";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#3d3d3d] py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-200 md:mb-12 lg:text-4xl">
          Projects
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={limo}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Executive Limo Service
                </span>
                <span className="text-gray-500">Gatsby / Node JS</span>
                <a
                  href="http://executivelimoservicemiami.com/"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={utopia}
                loading="lazy"
                alt="Photo by engin akyurt"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Utopia Climbing Community
                </span>
                <span className="text-gray-500">Next JS</span>
                <a
                  href="https://utopiaclimbcommunity.com/"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={beer}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  The Craft Hut
                </span>
                <span className="text-gray-500">React JS / Node JS</span>
                <a
                  href="https://thecrafthut.onrender.com/"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={restaurant}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Restaurant
                </span>
                <span className="text-gray-500">Gatsby</span>
                <a
                  href="https://restaurant-ee3a.onrender.com/"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={branding}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Personal Branding Agency
                </span>
                <span className="text-gray-500">React JS</span>
                <a
                  href="https://personal-branding-agency.onrender.com/"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={space}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Space
                </span>
                <span className="text-gray-500">Next JS</span>
                <a
                  href="https://jovial-lollipop-98d58f.netlify.app/"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={iceland}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Iceland
                </span>
                <span className="text-gray-500">HTML / CSS / JS</span>
                <a
                  href="https://visiticeland.onrender.com/"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <Image
                src={larawind}
                loading="lazy"
                alt="Photo by Austin Wade"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="relative flex w-full flex-col justify-center items-center rounded-lg bg-white p-4 text-center">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">
                  Larawind UI
                </span>
                <span className="text-gray-500">Next JS</span>
                <a
                  href="https://flourishing-heliotrope-54e07a.netlify.app/"
                  className="group mt-4 inline-flex items-center gap-1 text-md font-medium text-[#02dea3]"
                >
                  See project
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
