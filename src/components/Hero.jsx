import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <div className="flex gap-5">
            <h1 className={`${styles.heroHeadText} text-white`}>Hey, I'm</h1>

            <div
              className="bg-[#cef0f9] px-5 justify-center"
              style={{ borderRadius: "2rem" }}
            >
              <h1 className={`${styles.heroHeadText} text-white`}>
                <span className="text-[#00CDFF]">
                  {" "}
                  Mikey : <span>&#41;</span>{" "}
                </span>
              </h1>
            </div>
          </div>

          <div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I enjoy{" "}
              <span className="bg-[#a0ffb7] text-[#00c87a] px-2 rounded-full border border-[#00c87a] shadow-xl">
                programming
              </span>
              ,{" "}
              <span className="bg-[#ffacb4] text-[#d31428] px-2 rounded-full border border-[#d31428] shadow-xl">
                video-editing
              </span>
              , but mostly{" "}
              <span className="bg-[#ffd9a3] text-[#f0920e] px-2 rounded-full border border-[#f0920e] shadow-xl">
                building cool shenanigans
              </span>
              . <br className="sm:block hidden" />
              Lets explore the Mikey Galaxy...
              <br className="sm:block hidden" />
            </p>
          </div>

          <p className="mt-5 text-white-100">*Turn me around I'm 3D!</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                //just animating y property for the scroller
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
