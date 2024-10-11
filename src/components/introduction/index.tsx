import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';

const Introduction = () => {
  return (
    <div className='w-full lg:max-w-[380px] px-8 flex justify-center'>
      <div className='w-full'>
        <div className='image-container max-w-[150px] aspect-square flex justify-center mx-auto'>
          <Image
            src="/images/myphoto.jpg"
            alt="my prof"
            width={250}
            height={250}
            className='object-cover object-center rounded-full'
          />
        </div>
        <div className='detail'>
          <h2 className='text-center font-bold my-6'>Misato Tanno</h2>
          <div className='my-accouny w-full my-6 max-w-[150px] flex justify-between mx-auto '>
            <span>
              <Link href='https://www.instagram.com/getup_at_600?igsh=cnF3cTVyZnRuc2c3&utm_source=qr'>
                <FaInstagram size={20} className='font-thin' />
              </Link>
            </span>
            <span>
              <Link href='https://www.linkedin.com/in/misato-tanno-a2b475221/'>
                <FaLinkedin size={20} className='font-thin' />
              </Link>
            </span>
            <span className='cursor-pointer'>
              <a href='mailto:misatotanno3310@gmail.com'>
                <AiOutlineMail size={20} className='font-thin' />
              </a>
            </span>
          </div>
          <p className='text-sm '>
            📍 Based in Tokyo
          </p>
          <p className='text-sm'>
            I&apos;m a frontend engineer with a passion for creating dynamic and user-friendly web applications. Over the past few years, I have honed my skills in technologies such as React, Next.js, JavaScript, TypeScript, Tailwind CSS, and Three.js, aiming to deliver both functional and visually appealing digital experiences. I specialize in developing interactive websites, focusing not only on code quality but also on user experience (UX) and accessibility. I enjoy exploring GSAP for animations, and I am constantly learning new techniques to make web development more engaging and immersive.

          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
