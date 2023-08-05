import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import mikeylogo from "../assets/head.png";
import myself from "../assets/myself.png";

const slideInAndBobbing = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      when: "beforeChildren",
    },
    animate: {
      y: ["0%", "-10%"],
      transition: {
        y: { duration: 1, repeat: Infinity, yoyo: Infinity, ease: "easeInOut" },
      },
    },
  },
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col relative transform scale-135 space-y-4">
        <motion.div variants={textVariant()}>
          <div>
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
              <span className="bg-[#a0ffb7] text-[#00c87a] px-2 rounded-full border border-[#00c87a] shadow-xl">
                Introduction
              </span>
            </p>
          </div>

          <div className="flex gap-4">
            <h2 className={styles.sectionHeadText}>Who's </h2>
            <div className="rounded-lg bg-blue">
              <h2 className={styles.sectionHeadText}>Mikey?</h2>
            </div>
          </div>
        </motion.div>

        <div className="flex relative">
          <div className="flex flex-col w-[100%] md:w-[50%] bg-white rounded-2xl px-3 py-3 shadow-2xl outline-none ring-2 ring-blue-500 ring-opacity-50 z-20">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              I'm a curious{" "}
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white px-2 rounded-full shadow-xl">
                software developer
              </span>{" "}
              with experience working at a high-growth startup, and heavily
              involved in the VC and Twitter-startup scene. Here are a list of
              things I'm experienced in:
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Frameworks: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#cef0f9] text-[#22b5dc] px-2 rounded-full border border-[#22b5dc] shadow-xl">
                  React
                </span>{" "}
                <span className="bg-[#cecece] text-[#0b0b0b] px-2 rounded-full border border-[#0b0b0b] shadow-xl">
                  Next.JS
                </span>{" "}
                <span className="bg-[#ffb8b8] text-[#cb1010] px-2 rounded-full border border-[#cb1010] shadow-xl">
                  React Native
                </span>{" "}
              </div>
            </motion.p>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Languages: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#f4f5b7] text-[#ced325] px-2 rounded-full border border-[#ced325] shadow-xl">
                  Javascript
                </span>{" "}
                <span className="bg-[#a0e2ff] text-[#078dc6] px-2 rounded-full border border-[#078dc6] shadow-xl">
                  Typescript
                </span>{" "}
                <span className="bg-[#95f0a0] text-[#16b12a] px-2 rounded-full border border-[#16b12a] shadow-xl">
                  Python
                </span>{" "}
                <span className="bg-[#f4d1a7] text-[#7d4605] px-2 rounded-full border border-[#7d4605] shadow-xl">
                  C++
                </span>{" "}
                <span className="bg-[#f9ecce] text-[#f29f15] px-2 rounded-full border border-[#f29f15] shadow-xl">
                  HTML5
                </span>{" "}
              </div>
            </motion.p>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Backend: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#f5c892] text-[#ea8206] px-2 rounded-full border border-[#ea8206] shadow-xl">
                  Firebase
                </span>{" "}
                <span className="bg-[#b3f1f2] text-[#11e1e4] px-2 rounded-full border border-[#11e1e4] shadow-xl">
                  Go
                </span>{" "}
                <span className="bg-[#f6befe] text-[#cf16e8] px-2 rounded-full border border-[#cf16e8] shadow-xl">
                  MySQL
                </span>{" "}
              </div>
            </motion.p>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Design: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#fbc3e2] text-[#ff1496] px-2 rounded-full border border-[#ff1496] shadow-xl">
                  Figma
                </span>{" "}
                <span className="bg-[#c7c8f7] text-[#0305de] px-2 rounded-full border border-[#0305de] shadow-xl">
                  TailwindCSS
                </span>{" "}
                <span className="bg-[#f0d5a7] text-[#ff9f00] px-2 rounded-full border border-[#ff9f00] shadow-xl">
                  CSS3
                </span>{" "}
              </div>
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              If I'm being honest, I love building, period.{" "}
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              Startups, viral TikToks, Youtube Videos, you name it. Editing and
              Coding have given me a medium to design and actualize everything
              that goes on in that brain of mine. Walk with me, down this page,
              and lets learn a bit more about myself.
            </motion.p>
          </div>
          <div className="flex flex-col w-[100%] md:w-[50%] bg-black rounded-2xl px-3 py-3 shadow-2xl z-10 absolute translate-x-5 translate-y-5">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              I'm a curious{" "}
              <span className="bg-[#a0ffb7] text-[#00c87a] px-2 rounded-full border border-[#00c87a] shadow-xl">
                software developer
              </span>{" "}
              with experience working at a high-growth startup, and heavily
              involved in the VC and Twitter-startup scene. Here are a list of
              things I'm experienced in:
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Frameworks: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#cef0f9] text-[#22b5dc] px-2 rounded-full border border-[#22b5dc] shadow-xl">
                  React
                </span>{" "}
                <span className="bg-[#cecece] text-[#0b0b0b] px-2 rounded-full border border-[#0b0b0b] shadow-xl">
                  Next.JS
                </span>{" "}
                <span className="bg-[#ffb8b8] text-[#cb1010] px-2 rounded-full border border-[#cb1010] shadow-xl">
                  React Native
                </span>{" "}
              </div>
            </motion.p>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Languages: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#f4f5b7] text-[#ced325] px-2 rounded-full border border-[#ced325] shadow-xl">
                  Javascript
                </span>{" "}
                <span className="bg-[#a0e2ff] text-[#078dc6] px-2 rounded-full border border-[#078dc6] shadow-xl">
                  Typescript
                </span>{" "}
                <span className="bg-[#95f0a0] text-[#16b12a] px-2 rounded-full border border-[#16b12a] shadow-xl">
                  Python
                </span>{" "}
                <span className="bg-[#f4d1a7] text-[#7d4605] px-2 rounded-full border border-[#7d4605] shadow-xl">
                  C++
                </span>{" "}
                <span className="bg-[#f9ecce] text-[#f29f15] px-2 rounded-full border border-[#f29f15] shadow-xl">
                  HTML5
                </span>{" "}
              </div>
            </motion.p>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Backend: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#f5c892] text-[#ea8206] px-2 rounded-full border border-[#ea8206] shadow-xl">
                  Firebase
                </span>{" "}
                <span className="bg-[#b3f1f2] text-[#11e1e4] px-2 rounded-full border border-[#11e1e4] shadow-xl">
                  Go
                </span>{" "}
                <span className="bg-[#f6befe] text-[#cf16e8] px-2 rounded-full border border-[#cf16e8] shadow-xl">
                  MySQL
                </span>{" "}
              </div>
            </motion.p>
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              <span className="text-lg">Design: </span>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-[#fbc3e2] text-[#ff1496] px-2 rounded-full border border-[#ff1496] shadow-xl">
                  Figma
                </span>{" "}
                <span className="bg-[#c7c8f7] text-[#0305de] px-2 rounded-full border border-[#0305de] shadow-xl">
                  TailwindCSS
                </span>{" "}
                <span className="bg-[#f0d5a7] text-[#ff9f00] px-2 rounded-full border border-[#ff9f00] shadow-xl">
                  CSS3
                </span>{" "}
              </div>
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              If I'm being honest, I love building, period.{" "}
            </motion.p>

            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-[17px] max-w-3xl leading-[30px] text-black"
            >
              Startups, viral TikToks, Youtube Videos, you name it. Editing and
              Coding have given me a medium to design and actualize everything
              that goes on in that brain of mine. Walk with me, down this page,
              and lets learn a bit more about myself.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="rounded-lg w-96 h-96 bg-blue-200 absolute right-36 -top-26 p-4 hidden md:grid z-20"
          variants={slideInAndBobbing}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src={myself}
            alt="logo"
            className="w-96 h-96 object-contain -translate-y-6"
          />
        </motion.div>
        <motion.div
          className="rounded-lg w-96 h-96 bg-black absolute right-28 top-12 p-4 hidden md:grid z-10"
          variants={slideInAndBobbing}
          initial="hidden"
          animate="show"
        ></motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
