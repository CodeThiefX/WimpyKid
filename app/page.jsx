"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS library on component mount
  }, []);

  return (
    <>
      <section className="container mx-auto flex w-full flex-col pb-11 pt-11 md:flex-row">
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="flex-1 flex-col p-4 text-center md:p-11 md:pt-[100px] md:text-left"
        >
          <h6 className="pb-4 text-4xl">WELCOME TO:</h6>
          <h1 className="pb-4 text-8xl">
            <b>$GREG</b>
          </h1>
          <p className="text-2xl">
            $GREG is a meme community token that embarks on an exciting journey
            filled with twists, turns and plenty of laughs. Keeping a Crypto
            Diary filled with tips, hacks, and a few hilarious mishaps. $GREG Is
            on a quest to conquer the crypto world, one Satoshi at a time.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex-1 content-center justify-center"
        >
          <Image
            src="/assets/t-logo.png"
            alt="Logo"
            width={500}
            height={500}
            className="mx-auto object-contain"
          />
        </div>
      </section>

      <section className="bg-black pb-[50px] pt-[50px]">
        <div className="container mx-auto flex w-full flex-col  text-white md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="flex-1 content-center justify-center p-11"
          >
            <Image
              src="/assets/greg.png"
              alt="Logo"
              width={300}
              height={300}
              className="mx-auto object-contain"
            />
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="flex-1 flex-col p-4 text-center md:p-11 md:pt-[100px] md:text-left"
          >
            <h6 className="pb-4 text-4xl">WHY</h6>
            <h1 className="pb-4 text-8xl">
              <b>$GREG</b>
            </h1>
            <p
              data-aos="fade-up-left"
              data-aos-delay="300"
              className="justify-center p-5 text-center text-2xl"
            >
              <TfiArrowCircleRight />
              Meme Contest <br />
              <TfiArrowCircleRight />
              Community <br />
              <TfiArrowCircleRight />
              Governance <br />
              <TfiArrowCircleRight />
              Partnerships <br />
              <TfiArrowCircleRight />
              Charity Initiatives
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto w-full pb-[200px] pt-[200px]">
        <p
          data-aos="zoom-in-up"
          data-aos-delay="300"
          className="justify-center p-5 text-center text-2xl"
        >
          $GREG will not only motivate buyers to HODL but also inject humor and
          fun into $GREG communication and events, making it enjoyable for
          HODLers. $GREG aim to create a crypto community where learning and
          laughter go hand in hand.
        </p>
        <div className="container mx-auto flex justify-center gap-4">
          <Link
            data-aos="flip-up"
            data-aos-delay="300"
            href="https://t.me/GREGCommunity"
            className="flex flex-row items-center gap-4 rounded-2xl border-2 border-black  bg-black p-5 text-white transition-all hover:border-black hover:bg-white hover:text-black"
          >
            Telegram
            <LiaTelegramPlane />
          </Link>
          <Link
            data-aos="flip-up"
            data-aos-delay="300"
            href="https://x.com/GREGCommunity"
            className="flex flex-row items-center gap-4 rounded-2xl border-2 border-black  bg-black p-5 text-white transition-all hover:border-black hover:bg-white hover:text-black"
          >
            Twitter <FaXTwitter />
          </Link>
        </div>
      </section>

      <section className="bg-black pb-[100px] pt-[100px]">
        <div className="container mx-auto flex w-full flex-col  text-center text-white">
          <div className="flex flex-col md:flex-row">
            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className=" m-3 flex-1 text-center"
            >
              <Image
                src="/assets/pic1.jpg"
                alt="Logo"
                width={300}
                height={300}
                className="mx-auto w-full object-contain"
              />
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className=" m-3 flex-1 text-center"
            >
              <Image
                src="/assets/pic2.jpg"
                alt="Logo"
                width={300}
                height={300}
                className="mx-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className=" m-3 flex-1 text-center"
            >
              <Image
                src="/assets/pic3.jpg"
                alt="Logo"
                width={300}
                height={300}
                className="mx-auto w-full object-contain"
              />
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className=" m-3 flex-1 text-center"
            >
              <Image
                src="/assets/pic4.jpg"
                alt="Logo"
                width={300}
                height={300}
                className="mx-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className=" m-3 flex-1 text-center"
            >
              <Image
                src="/assets/pic5.jpg"
                alt="Logo"
                width={300}
                height={300}
                className="mx-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
