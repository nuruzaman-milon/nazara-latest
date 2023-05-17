"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const [serviceToogleArrow, setServiceToogleArrow] = useState(false);
  const [moreToogleArrow, setMoreToogleArrow] = useState(false);
  const [companyToogleArrow, setCompanyToogleArrow] = useState(false);
  return (
    <div className="py-10 bg-primary-color">
      <footer>
        {/* for mobile & tab*/}
        <div className="lg:hidden container text-white text-center flex flex-col gap-y-10">
          <div className="">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/images/nazara-footer-logo.png"
                alt="My Image"
                width={286}
                height={117}
                className=""
              />
              {/* <h2 className="text-3xl font bold text-white">Elite Spa</h2> */}
            </Link>
          </div>

          <div>
            {/* service 1 */}
            <div>
              <ul className="flex flex-col gap-y-2">
                <li className="text-white text-xl font-medium mb-2 flex justify-center">
                  <Link href="/">
                    <button
                      className="flex"
                      onClick={() => setServiceToogleArrow(!serviceToogleArrow)}
                    >
                      CUSTOMER SERVICE
                      {serviceToogleArrow ? (
                        <FaAngleUp size={30} />
                      ) : (
                        <FaAngleDown size={30} />
                      )}
                    </button>
                  </Link>
                </li>
                {serviceToogleArrow && (
                  <>
                    <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                      <Link href="/">Track Your Order</Link>
                    </li>

                    <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                      <Link href="/">Shipping & Delivery</Link>
                    </li>

                    <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                      <Link href="/">Return & Exchange</Link>
                    </li>
                    <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                      <Link href="/">Book an Appointment</Link>
                    </li>
                    <li className="text-white hover:underline underline-offset-2 text-sm font-normal mb-4">
                      <Link href="/">FAQ’S</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* service 2 */}
            <ul className="flex flex-col gap-y-2">
              <li className="text-white flex justify-center text-xl font-medium mb-2">
                <Link href="/">
                  <button
                    className="flex"
                    onClick={() => setMoreToogleArrow(!moreToogleArrow)}
                  >
                    MORE FROM NAZARA
                    {serviceToogleArrow ? (
                      <FaAngleUp size={30} />
                    ) : (
                      <FaAngleDown size={30} />
                    )}
                  </button>
                </Link>
              </li>
              {moreToogleArrow && (
                <>
                  <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                    <Link href="/">E-Gift Cards</Link>
                  </li>

                  <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                    <Link href="/">We’re Hiring!</Link>
                  </li>

                  <li className="text-white hover:underline underline-offset-2 text-base font-normal mb-4">
                    <Link href="/">Our Locations</Link>
                  </li>
                </>
              )}
            </ul>

            {/* service 3 */}
            <ul className="flex flex-col gap-y-2">
              <li className="text-white flex justify-center text-xl font-medium mb-2">
                <Link href="/">
                  <button
                    className="flex"
                    onClick={() => setCompanyToogleArrow(!companyToogleArrow)}
                  >
                    OUR COMPANY
                    {serviceToogleArrow ? (
                      <FaAngleUp size={30} />
                    ) : (
                      <FaAngleDown size={30} />
                    )}
                  </button>
                </Link>
              </li>
              {companyToogleArrow && (
                <>
                  <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                    <Link href="/">Contact us</Link>
                  </li>

                  <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                    <Link href="/">About us</Link>
                  </li>

                  <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                    <Link href="/">Terms of use</Link>
                  </li>
                  <li className="text-white hover:underline underline-offset-2 text-base font-normal">
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li className="text-white hover:underline underline-offset-2 text-sm font-normal">
                    <Link href="/">Disclaimer</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <div className="flex justify-center gap-x-6 mb-3">
              <Link
                href="https://www.facebook.com/EliteSpaFlorida/"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaFacebook size={30} color="white" />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaYoutube size={30} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/Elite_spa7/"
                target="_blank"
                // className="border p-2 rounded-full"
              >
                <FaInstagram size={30} color="white" />
              </Link>
              <Link
                href="https://www.instagram.com/Elite_spa7/"
                target="_blank"
              >
                <FaTiktok size={30} color="white" />
              </Link>
            </div>

            <div className="flex gap-2 justify-center">
              <Image
                src="/images/visa.png"
                alt="My Image"
                width={48}
                height={37}
                className="brightness-50"
              />
              <Image
                src="/images/mastercard.png"
                alt="My Image"
                width={48}
                height={37}
                className="brightness-50"
              />
              <Image
                src="/images/paypal.png"
                alt="My Image"
                width={54}
                height={37}
                className="brightness-50"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div>
              <span className="text-sm text-white">
                <div className="text-white mb-1">
                  © Copyright 2022 ANZARA LIFESTYLE LTD. All rights Reserved.
                </div>
                <div className="text-white">
                  Design & Development by
                  <Link
                    className="ml-1"
                    href="https://bayshorecommunication.com/"
                    target="_blank"
                  >
                    <span className="text-white underline underline-offset-2 mt-1">
                      Bayshore Communication
                    </span>
                  </Link>
                </div>
              </span>
            </div>
          </div>
        </div>

        {/* for laptop & desktop */}
        <div className="hidden lg:block container text-white text-center lg:text-left">
          <div className="lg:flex lg:items-start lg:justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center justify-center lg:justify-start mb-4 sm:mb-0"
              >
                <Image
                  src="/images/nazara-footer-logo.png"
                  alt="My Image"
                  width={220}
                  height={100}
                  className="ml-40 mt-8"
                />
                {/* <h2 className="text-3xl font bold text-white">Elite Spa</h2> */}
              </Link>
              <div className="text-color-cus flex justify-center gap-x-6 mb-3 lg:mb-0 ml-40">
                <Link
                  href="https://www.facebook.com/EliteSpaFlorida/"
                  target="_blank"
                  // className="border p-2 rounded-full"
                >
                  <FaFacebook size={25} color="white" />
                </Link>
                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  // className="border p-2 rounded-full"
                >
                  <FaYoutube size={25} color="white" />
                </Link>
                <Link
                  href="https://www.instagram.com/Elite_spa7/"
                  target="_blank"
                  // className="border p-2 rounded-full"
                >
                  <FaInstagram size={25} color="white" />
                </Link>
                <Link
                  href="https://www.instagram.com/Elite_spa7/"
                  target="_blank"
                >
                  <FaTiktok size={25} color="white" />
                </Link>
              </div>
            </div>

            {/* service 1 */}
            <div>
              <ul className="flex flex-col gap-y-1 lg:gap-y-3">
                <p className="text-white text-sm font-medium mb-2">
                  CUSTOMER SERVICE
                </p>
                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">Track Your Order</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">Shipping & Delivery</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">Return & Exchange</Link>
                </li>
                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">Book an Appointment</Link>
                </li>
                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">FAQ’S</Link>
                </li>
              </ul>
            </div>
            <hr className="lg:hidden  border-gray-500" />
            {/* service 2 */}
            <div>
              <ul className="flex flex-col gap-y-1 lg:gap-y-3">
                <p className="text-white text-sm font-medium mb-2">
                  MORE FROM NAZARA
                </p>
                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">E-Gift Cards</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">We’re Hiring!</Link>
                </li>

                <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                  <Link href="/">Our Locations</Link>
                </li>
              </ul>
            </div>

            <hr className="lg:hidden my-5 border-gray-500" />

            {/* service 3 */}
            <ul className="flex flex-col gap-y-1 lg:gap-y-3">
              <p className="text-white text-sm font-medium mb-2">OUR COMPANY</p>
              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/">Contact us</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/">About us</Link>
              </li>

              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/">Terms of use</Link>
              </li>
              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/">Privacy Policy</Link>
              </li>
              <li className="text-white hover:underline underline-offset-2 text-[13px] font-normal">
                <Link href="/">Disclaimer</Link>
              </li>
            </ul>
          </div>
          <hr className="mx-auto border-base-100 my-6" />
          <div className="flex justify-between items-center">
            <div>
              <span className="text-[13px] text-white">
                <div className="text-white mb-1">
                  © Copyright 2022 ANZARA LIFESTYLE LTD. All rights Reserved.
                </div>
                <div className="text-white">
                  Design & Development by
                  <Link
                    className=" ml-1"
                    href="https://bayshorecommunication.com/"
                    target="_blank"
                  >
                    <span className="block lg:inline text-white underline underline-offset-2 mt-1 lg:mt-0">
                      Bayshore Communication
                    </span>
                  </Link>
                </div>
              </span>
            </div>
            <div className="flex gap-2">
              <Image
                src="/images/visa.png"
                alt="My Image"
                width={42}
                height={35}
                className="brightness-50"
              />
              <Image
                src="/images/mastercard.png"
                alt="My Image"
                width={42}
                height={35}
                className="brightness-50"
              />
              <Image
                src="/images/paypal.png"
                alt="My Image"
                width={42}
                height={35}
                className="brightness-50"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
