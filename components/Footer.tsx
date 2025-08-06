import Link from 'next/link'
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h2 className="lg:max-w-[45vw] heading">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>
        <p className="text-center text-white-200 mg:mt-10 my-5">
          Reach out to me and let&apos;s discuss how can I help you achieve your
          goals!
        </p>
        <a href="mailto:uzair.jay21@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-3">
        <p className="font-light md:font-normal text-sm md:text-base">
          Copyright © 2025 Uzair
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer w-12 h-12 grayscale hover:grayscale-0 transition-all duration-400 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-black-200 bg-opacity-75 rounded-full border border-black-300">
                <Image
                  src={profile.img}
                  alt="social media"
                  width={30}
                  height={30}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer