"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaCreditCard,
  FaSearch,
  FaShoppingBag,
  FaTimes,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle(!toogle);
  };
  return (
    <div className="bg-primary-color text-base-100 relative">
      {/* pc and desktop view  */}
      <div className="hidden lg:block container py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="bg-[#910000] px-2 py-1 text-lg">
            EXCLUSIVE WOMAN WEAR
          </Link>
          <Link href="/">
            <Image
              src="/images/nazara-navbar-logo.png"
              alt="logo"
              width={260}
              height={100}
            />
          </Link>
          <div className="w-60">
            <div className="flex gap-x-6 justify-end">
              <Image
                src="/images/logo/user.svg"
                alt="logo"
                width={25}
                height={25}
              />
              <Image
                src="/images/logo/shopping-card.svg"
                alt="logo"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <ul className="flex gap-2 2xl:gap-4">
              <div className="group">
                <li className="font-semibold relative bg-base-100 text-primary-color cursor-pointer text-sm 2xl:text-base px-2 rounded-lg hover:underline underline-offset-4">
                  NEW ARRIVALS
                  <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                </li>
                <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-screen left-0 top-[160px] z-10 shadow-xl">
                  <div className="flex justify-between w-2/3 mx-auto py-6">
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">SALE</li>
                      <li>NEW ARRIVALS</li>
                      <li>READY TO SHIP</li>
                      <li>LIMITED STOCK</li>
                      <li>DISCOUNT</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY CATEGORY
                      </li>
                      <li>CROP-TOP SKIRT</li>
                      <li>PARTY SHARARA</li>
                      <li>PARTY GHARARA</li>
                      <li>PARTY GOWN</li>
                      <li>PARTY SAREE</li>
                    </ul>
                    <Image
                      src="/images/dress/dress.png"
                      alt="logo"
                      width={180}
                      height={64}
                    />
                    <Image
                      src="/images/dress/dress-1.png"
                      alt="logo"
                      width={180}
                      height={64}
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <li className="font-semibold relative cursor-pointer text-sm 2xl:text-base px-2 rounded-lg hover:underline underline-offset-4">
                  REGULAR WEAR
                  <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                </li>
                <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-screen left-0 top-[160px] z-10 shadow-xl">
                  <div className="flex justify-between w-2/3 mx-auto py-6">
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">SALE</li>
                      <li>NEW ARRIVALS</li>
                      <li>READY TO SHIP</li>
                      <li>LIMITED STOCK</li>
                      <li>DISCOUNT</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY CATEGORY
                      </li>
                      <li>DESIGNER WEAR</li>
                      <li>READY SAREE</li>
                      <li>SINGLE SAREE</li>
                      <li>UNSTITCHED KAMEEZ</li>
                      <li>READY KAMEEZ</li>
                    </ul>
                    <Image
                      src="/images/dress/dress.png"
                      alt="logo"
                      width={180}
                      height={64}
                    />
                    <Image
                      src="/images/dress/dress-1.png"
                      alt="logo"
                      width={180}
                      height={64}
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <li className="font-semibold relative cursor-pointer text-sm 2xl:text-base px-2 rounded-lg hover:underline underline-offset-4">
                  PARTY WEAR
                  <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                </li>
                <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-screen left-0 top-[160px] z-10 shadow-xl">
                  <div className="flex justify-between w-2/3 mx-auto py-6">
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">SALE</li>
                      <li>NEW ARRIVALS</li>
                      <li>READY TO SHIP</li>
                      <li>LIMITED STOCK</li>
                      <li>DISCOUNT</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY CATEGORY
                      </li>
                      <li>CROP-TOP SKIRT</li>
                      <li>PARTY SHARARA</li>
                      <li>PARTY GHARARA</li>
                      <li>PARTY GOWN</li>
                      <li>PARTY SAREE</li>
                    </ul>
                    <Image
                      src="/images/dress/dress.png"
                      alt="logo"
                      width={180}
                      height={64}
                    />
                    <Image
                      src="/images/dress/dress-1.png"
                      alt="logo"
                      width={180}
                      height={64}
                    />
                  </div>
                </div>
              </div>
              <div className="group">
                <li className="font-semibold relative cursor-pointer text-sm 2xl:text-base px-2 rounded-lg hover:underline underline-offset-4">
                  BRIDAL WEAR
                  <div className="h-6 w-full absolute lg:bottom-[-23px] xl:bottom-[-21px] left-0"></div>
                </li>
                <div className="hidden text-text-color group-hover:block bg-base-100 absolute w-screen left-0 top-[160px] z-10 shadow-xl">
                  <div className="flex justify-between w-2/3 mx-auto py-6">
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">SALE</li>
                      <li>NEW ARRIVALS</li>
                      <li>READY TO SHIP</li>
                      <li>LIMITED STOCK</li>
                      <li>DISCOUNT</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY CATEGORY
                      </li>
                      <li>BRIDAL LEHENGA</li>
                      <li>SEMI-BRIDAL LEHENGA</li>
                      <li>BRIDAL SHARARA</li>
                      <li>BRIDAL GHARARA</li>
                      <li>BRIDAL GOWN</li>
                      <li>BRIDAL PAMPLOOM</li>
                      <li>BRIDAL SAREE</li>
                    </ul>
                    <ul className="flex flex-col gap-y-2">
                      <li className="text-primary-color font-semibold">
                        SHOP BY FESTIVAL
                      </li>
                      <li>ENGAGEMENT</li>
                      <li>HALDI & MEHNDI</li>
                      <li>NIKKAH</li>
                      <li>WALIMA</li>
                    </ul>
                    <Image
                      src="/images/dress/dress-1.png"
                      alt="logo"
                      width={180}
                      height={64}
                    />
                  </div>
                </div>
              </div>
              <div>
                <li className="font-semibold cursor-pointer text-sm 2xl:text-base px-2 rounded-lg hover:underline underline-offset-4">
                  BOOK AN APPOINTMENT
                </li>
              </div>
              <div>
                <li className="font-semibold cursor-pointer text-sm 2xl:text-base px-2 rounded-lg hover:underline underline-offset-4">
                  OUR LOCATIONS
                </li>
              </div>
            </ul>
          </div>
          <form className="">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="w-28 lg:w-32 xl:w-full p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-50 outline-none"
                placeholder="Search"
                required
                // w-1/2 lg:w-3/4 xl:w-full
              />
            </div>
          </form>
        </div>
      </div>

      {/* mobile and tab view  */}
      <div className="lg:hidden">
        <div className="container flex justify-between items-center">
          <button
            onClick={() => handleToogle()}
            className="text-3xl font-bold flex lg:hidden"
          >
            {toogle === false && <FaBars />}
            {toogle && <FaTimes />}
          </button>

          <Link href="/">
            <Image
              src="/images/nazara-navbar-logo.png"
              alt="logo"
              width={180}
              height={64}
            />
          </Link>

          <div className="flex gap-2 sm:gap-4 items-center">
            <button onClick={() => handleToogle()}>
              <FaSearch size={20} />
            </button>

            <FaUser size={20} />

            <FaShoppingBag size={20} />
          </div>
        </div>

        {toogle && (
          <div className="block lg:hidden w-full origin-top absolute top-16 shadow-lg bg-primary-color ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="container">
              <form className="">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="w-full my-2 p-2 pl-10 text-sm text-gray-900 rounded-full bg-gray-50 outline-none"
                    placeholder="Search"
                    required
                    // w-1/2 lg:w-3/4 xl:w-full
                  />
                </div>
              </form>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/">HOME</Link>
              </li>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/">EXCLUSIVE WOMAN WEAR</Link>
              </li>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/packages">new ARRIVALS</Link>
              </li>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/membership">PARTY WEAR</Link>
              </li>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/about-us">REGULAR WEAR</Link>
              </li>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/contact-us">BRIDAL WEAR</Link>
              </li>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/contact-us">BOOK AN APPOINTMENT</Link>
              </li>
              <li className="block py-2 text-white text-lg cursor-pointer">
                <Link href="/contact-us">OUR LOCATIONS</Link>
              </li>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
