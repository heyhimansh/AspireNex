import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { BsFileEarmarkPdf, BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

import logo from "../assets/log.png";

import Features from "./feature";


export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  return (
    
    <div className="bg-black/90">
      
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Mind Mingle</span>
              <img className="h-10 w-auto" src={logo} alt="" />
            </a>
          </div>
        </nav>
      </header>
     
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col items-center"
      >
   

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="bg-indigo-300 relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <a href="#feature" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Features <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-indigo-300 sm:text-6xl">
              Boost Your Brainpower Ace the Quiz
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Join thousands of quiz enthusiasts and put your knowledge to the
              ultimate test with our diverse and engaging question sets.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <a
                href="/createquiz"
                className="rounded-md bg-indigo-300 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      
      <Features />
      </motion.div>
      <div className="flex flex-col py-8  w-full space-y-6 items-center justify-center">
        <div className="divide-x divide-solid  grid grid-cols-3 w-full">
          <a
            href="#"
            target="_blank"
            className="flex items-center justify-center flex-col text-lg text-indigo-600"
          >
            <AiOutlineInstagram className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
          </a>
          <a
            href="https://github.com/heyhimanshu"
            target="_blank"
            className="flex items-center justify-center flex-col text-lg  text-indigo-600"
          >
            <BsGithub className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-rathore-537885202/"
            target="_blank"
            className="flex items-center justify-center flex-col text-lg  text-indigo-600"
          >
            <FiLinkedin className="social-icon h-7 w-7 sm:h-8 sm:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10" />
          </a>
        </div>
      </div>
    </div>
  );
}
