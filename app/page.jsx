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
          className="flex-1 flex-col p-4 text-center md:p-11 md:pt-[200px] md:text-left"
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

      {/* <section className="bg-black pb-[100px] pt-[100px]">
        <div className="container mx-auto flex w-full flex-col  text-center text-white">
          <h1 className="pb-8 text-6xl">ROADMAP</h1>
          <div className="flex w-full flex-col md:flex-row">
            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className="roadmap-card m-3 flex-1 text-center"
            >
              <h1 className="pb-10 text-3xl">
                Phase 1: Project Launch and Community Building
              </h1>
              <p>
                Project Inception: Start by defining the $GREG project's concept
                and goals, assemble a core team, and secure initial funding
                through private sales. Develop the whitepaper and create an
                online presence.
                <br />
                <br />
                Token Generation Event: Conduct a successful TGE to distribute
                $GREG tokens, list on crypto exchanges, and launch the official
                website and social media channels. Build a growing and engaged
                community.
                <br />
                <br />
                Community Engagement: Actively interact with the community via
                various platforms, release teasers, and host events to build
                excitement. Reward early supporters to foster enthusiasm and
                participation.
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className="roadmap-card m-3 flex-1 text-center"
            >
              <h1 className="pb-10 text-3xl">
                Phase 2: NFT Launch and Community Engagement
              </h1>
              <p>
                NFT Collection Development: Collaborate with artists to create
                the initial NFT collection inspired by Greg's adventures,
                announce unique features, and plan an NFT presale to attract
                early adopters.
                <br />
                <br />
                NFT Launch and Meme Contest: Release the first NFT batch,
                conduct a meme contest to engage the community, and actively
                promote NFTs through social media for wider adoption. Community
                Governance:
                <br />
                <br />
                Implement community governance mechanisms like a DAO, allow
                token holders to influence project decisions through votes, and
                maintain community engagement with NFT releases and contests.
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className="roadmap-card m-3 flex-1 text-center"
            >
              <h1 className="pb-10 text-3xl">
                Phase 3: Partnerships and Charity Initiatives
              </h1>
              <p>
                Partnerships: Seek partnerships with crypto projects,
                influencers, or brands that align with $GREG's vision,
                collaborate on unique NFTs or events, and leverage partnerships
                for increased visibility and growth.
                <br />
                <br />
                Charity Initiatives: Dedicate a portion of project earnings to
                charitable initiatives in line with "Diary of a Wimpy Kid"
                themes, announce and promote these initiatives to the community,
                and involve the community in selecting beneficiaries to foster a
                sense of ownership.
              </p>
            </div>

            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              className="roadmap-card m-3 flex-1 text-center"
            >
              <h1 className="pb-10 text-3xl">
                Phase 4: Long-Term Sustainability and Growth
              </h1>
              <p>
                Ongoing Development: Continue releasing new NFT collections,
                explore ecosystem expansion possibilities like marketplaces or
                metaverse integration, and enhance community governance features
                based on feedback.
                <br />
                <br />
                Sustained Growth: Adapt and evolve the project based on market
                trends and community feedback, maintain a strong focus on
                community engagement and NFT development, and explore additional
                partnerships and collaborations for sustained long-term growth.
                <br />
                <br />
                Beyond Month 30: Continue evolving the project, explore new
                opportunities, and ensure its longevity by staying responsive to
                market dynamics and community needs.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
