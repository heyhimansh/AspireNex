import { useEffect } from "react";
import lawgpt from "../../assets/images/lawgpt.png";
import coin from "../../assets/images/coin.png";
import bank from "../../assets/images/bank.png";

import realestatehub from "../../assets/images/realestatehub.png";
import { BsGithub, BsArrowRight } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ color }) => {
  useEffect(() => {
    let containers = document.querySelectorAll(".container");

    containers.forEach((container) => {
      const imgContainer = container.querySelector(".img-container");
      const img = container.querySelector(".img");
      const textContainer = container.querySelector(".text-container");
      const contentLine = textContainer.children[0].children[0];
      const contentP = textContainer.children[1];
      const contentBtn = textContainer.children[2];

      gsap.delayedCall(1, () => {
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top 65%",
              end: "top top",
              toggleActions: "play none resume pause",
            },
          })
          .set(container, {
            duration: 0.5,
            visibility: "visible",
            ease: "power4.Out",
          })
          .to(
            imgContainer,
            {
              duration: 1.6,
              width: "0%",
              ease: "power4.out",
            },
            0.2
          )
          .from(
            img,
            {
              duration: 1.6,
              scale: 1.6,
              ease: "power4.out",
            },
            0.2
          )
          .from(
            contentLine.firstChild,
            {
              duration: 1,
              y: "54px",
              ease: "power4.inOut",
            },
            0.5
          )
          .from(
            contentP,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power4.inOut",
            },
            1
          )
          .from(
            contentBtn,
            {
              duration: 1,
              y: 20,
              opacity: 0,
              ease: "power4.inOut",
            },
            1.2
          );
      });

      const tl2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: "#project-heading",
            start: "top 95%",
            toggleActions: "play none resume pause",
          },
        })
        .fromTo(
          "#project-heading",
          {
            y: 70,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power4.inOut",
            duration: 1.4,
          }
        );
    });
  }, []);

  return (
    <div
      className={`w-full bg-${color} pb-40 xl:px-44 lg:px-36 md:px-32 sm:px-28 vvs:px-12 px-10`}
      id="projects"
    >
      <h1
        id="project-heading"
        className="text-[#0096c7] font-Glimer font-semibold z-40 lg:mb-32 mb-20 vvs:text-[4rem] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[5.5rem] xl:text-[9.2rem] 2xl:text-[10.8rem]  text-[3.5rem] leading-[3.5rem] sm:leading-[5.5rem] md:leading-[6rem] lg:leading-[7rem] xl:leading-[9rem] 2xl:leading-[10rem]  cursor-default"
      >
        Featured Projects ////
      </h1>
      <div className="sm:space-y-40 space-y-30 xl:space-y-[35vh] z-30">
        {/* realstatehub */}
        <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
          <div
            className={`lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper bg-${color}`}
          >
            <img
              src={realestatehub}
              alt="project image"
              className="absolute rounded-lg w-[90%] object-contain h-[90%] img"
            />
            {/* <div className={`img-container absolute top-0 right-0 bg-${color} w-full h-full`}></div> */}
          </div>

          <div className="text-container text-[#0096c7] lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
            <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
              <div
                className={`content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-${color}`}
              >
                <div className="content-line-inner">RealEstateHub </div>
              </div>
            </h1>
            <p className="font-normal cursor-default font-Glimer-Light text-[#0096c7]/70 xl:text-xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
              Welcome to RealEstateHub, a full-stack real estate project that
              enables users to seamlessly buy, sell, and book visits for various
              real estate properties.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/heyhimansh/RealEstateHub"
                >
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-[#0096c7]/70 hover:text-[#0096c7]" />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://real-estate-hub-rho.vercel.app/"
                >
                  <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-[#0096c7] transition duration-200 ease-in-out text-[#0096c7]/70" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LawGPT */}
        <div className="container lg:space-x-2  flex flex-col-reverse lg:flex-row lg:justify-between  lg:items-center items-start invisible ">
          <div className="text-container text-[#0096c7] lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
            <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
              <div
                className={`content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-${color}`}
              >
                <div className="content-line-inner">LawGPT</div>
              </div>
            </h1>
            <p className="font-normal cursor-default font-Glimer-Light text-[#0096c7]/70 xl:text-2xl sm:text-xl 2xl:text-3xl vvs:text-base text-sm">
              LawGPT is an innovative project designed to provide comprehensive
              legal assistance and streamline case-solving processes for
              lawyers.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/SriPrarabdha/LegalBrain.ai"
                >
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-[#0096c7]/70 hover:text-[#0096c7]" />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://legalbrain-tan.vercel.app/"
                >
                  <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-[#0096c7] transition duration-200 ease-in-out text-[#0096c7]/70" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper bg-${color}`}
          >
            <img
              src={lawgpt}
              alt="project image"
              className="absolute rounded-lg w-[90%] object-contain h-[90%] img"
            />
            <div
              className={`img-container absolute top-0 left-0 bg-${color} w-full h-full`}
            ></div>
          </div>
        </div>

        {/*  Bank's Responsive Website   */}
        <div className="container lg:space-x-2 flex flex-col lg:flex-row lg:justify-between lg:items-center items-start invisible">
          <div
            className={`lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper bg-${color}`}
          >
            <img
              src={bank}
              alt="project image"
              className="absolute rounded-lg w-[90%] object-contain h-[90%] img"
            />
            <div
              className={`img-container absolute top-0 right-0 bg-${color} w-full h-full`}
            ></div>
          </div>

          <div className="text-container text-[#0096c7] lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3">
            <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
              <div
                className={`content-line flex lg:justify-end items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-${color}`}
              >
                <div className="content-line-inner">
                  {" "}
                  Bank's Responsive Website{" "}
                </div>
              </div>
            </h1>
            <p className="font-normal cursor-default font-Glimer-Light text-[#0096c7]/70 xl:text-2xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm lg:text-right">
              This web application is your sole frontend project, designed to
              provide users with easy access to banking services across various
              devices.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center lg:justify-end">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/heyhimansh/bank_responsive_web"
                >
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-[#0096c7]/70 hover:text-[#0096c7]" />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://bank-resposnive-web-home.vercel.app/"
                >
                  <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-[#0096c7] transition duration-200 ease-in-out text-[#0096c7]/70" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COIN TRACK */}
        <div className="container lg:space-x-2 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start invisible">
          <div className="text-container text-[#0096c7] lg:space-y-4 space-y-2 md:space-y-3 sm:space-y-3 ">
            <h1 className="hidden-text font-bold font-Glimer-Bold cursor-default lg:text-4xl text-2xl sm:text-3xl 2xl:text-5xl lg:mt-0 mt-5">
              <div
                className={`content-line flex items-center m-0 lg:h-[52px] 2xl:h-[60px] overflow-hidden bg-${color}`}
              >
                <div className="content-line-inner">Coin Track</div>
              </div>
            </h1>
            <p className="font-normal cursor-default font-Glimer-Light text-[#0096c7]/70 xl:text-2xl  sm:text-xl 2xl:text-3xl vvs:text-base text-sm">
              CoinTrack is an advanced cryptocurrency application built using
              React, Redux Toolkit, Ant Design, Chart.js, and RapidAPI.
            </p>
            <div className="btn-row flex justify-start space-x-6 items-center">
              <div className="github-btn">
                <a
                  className="icon "
                  target="_blank"
                  href="https://github.com/heyhimansh/CoinTrack"
                >
                  <BsGithub className="lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-translate-y-1 transition duration-200  ease-in-out repo text-[#0096c7]/70 hover:text-[#0096c7]" />
                </a>
              </div>
              <div className="liveDemo-btn">
                <a
                  className="icon"
                  target="_blank"
                  href="https://cryptotrackgg.netlify.app/news"
                >
                  <BsArrowRight className="link lg:h-8 lg:w-8 2xl:h-9 2xl:w-9 vvs:h-6 vvs:w-6 sm:w-7 sm:h-7 h-5 w-5 hover:-rotate-[45deg] hover:text-[#0096c7] transition duration-200 ease-in-out text-[#0096c7]/70" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`lg:h-[400px] 2xl:h-[500px] h-[250px] sm:h-[300px] md:h-[350px] w-full relative overflow-hidden img-wrapper bg-${color} `}
          >
            <img
              src={coin}
              alt="project image"
              className="absolute rounded-lg w-[90%] object-contain h-[90%] img"
            />
            <div
              className={`img-container absolute top-0 left-0 bg-${color} w-full h-full`}
            ></div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

Projects.defaultProps = {
  color: "primary",
};

export default Projects;
