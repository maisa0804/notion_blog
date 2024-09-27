import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Introduction = () => {
  return (
    <div className='w-full lg:max-w-[380px] px-8 flex justify-center'>
      <div className='w-full'>
        <div className='image-container max-w-[150px] aspect-square flex justify-center mx-auto'>
          <Image
            src="/images/sample.png"
            alt="my prof"
            width={250}
            height={250}
            className='object-cover object-center rounded-full'
          />
        </div>
        <div className='detail'>
          <h2 className='text-center font-bold my-6'>Misato Tanno</h2>
          <div className='my-accouny w-full my-6 max-w-[150px] flex justify-between mx-auto '>
            <span><FaInstagram size={20} className='font-thin' /></span>
            <span><FaLinkedin size={20} className='font-thin' /></span>
            <span><AiOutlineMail size={20} className='font-thin' /></span>
          </div>
          <p className='text-sm '>Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
