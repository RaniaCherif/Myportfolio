import { motion } from "framer-motion";
import { styles } from "../styles";
import LapTop from "./canvas/LapTop";
import profile from "../assets/profile.jpg";

const Profile = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <img
          className="object-bottom  w-[5rem] h-[5rem] rounded-[50%] absolute left-[2rem] top-[-4rem]"
          src={profile}
        />

        <div>
          <h1
            className={`${styles.heroHeadText} text-white text_shadows inline-block`}
          >
            Hello,
          </h1>
          <span className={`${styles.heroSpanText} text-[#915EFF] `}>
            I'm Rania Cherif
          </span>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop FullsStackJs MERN, WebSite
            <br className="sm:block hidden" />
            FrontEnd and BackEnd
          </p>
        </div>

        <div className=" scale-up-center relative left-[13rem] top-[2rem] flex flex-col flex-shrink-0 flex-grow-0 h-[6rem] justify-between hover:animate-spin scale-up-center">
          <p
            id="test"
            className={`${styles.projectDetail}text-white-100 ${styles.marKeur}`}
          >
            Real time dashboard stats Data
          </p>
          <p
            className={` ml-10 ${styles.projectDetail} text-white-100 ${styles.marKeur}`}
          >
            3D stunning Globe projection visuals
          </p>
          <p
            className={`${styles.projectDetail} text-white-100 ${styles.marKeur}`}
          >
            Reactive interaction and responsivness
          </p>
          <p
            className={` ml-10 ${styles.projectDetail} text-white-100 ${styles.marKeur}`}
          >
            Backend powered by Nodejs and MongoDB
          </p>
        </div>
      </div>
      <div className="pl-[20rem] absolute w-[70rem] h-[35rem]">
        <LapTop />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
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

export default Profile;
