import React from 'react'
import { CardProps } from './type'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowSmallUp } from "react-icons/hi2";

const Card = ({ title, img, tags, date }: CardProps) => {

  return (
    <div className='w-full h-full flex justify-center tracking-wide'>
      <div className='w-full flex flex-col max-w-[350px]'>
        <Link href="/" className='block relative group' target='_blank'>
          <span className='top-4 right-4 absolute z-10 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'>
            <HiOutlineArrowSmallUp className='rotate-45' />
          </span>
          <div className='w-full h-full bg-background absolute rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-400 ease-in z-[1]'></div>
          <Image
            src={img}
            alt="Sample Image"
            width={350}
            height={216}
            className='rounded-lg'
            priority
          />
        </Link>
        <ul className='flex justify-start items-center gap-1 my-4 w-full flex-wrap'>
          {tags.map((tag) => {
            return (
              <li key={tag}>
                <Link href={"/"}>
                  <span className='bg-foreground text-background text-xs py-1 px-3 rounded-[25px]'>{tag}</span>
                </Link>
              </li>)
          })}
        </ul>
        <h2 className='text-lg font-bold hover:text-gray-500 transition-colors duration-300'>
          <Link href="/">
            {title}
          </Link>
        </h2>
        <p className='text-xs mt-5 text-gray-100 font-thin'>
          <span>{date.toString()}</span>
        </p>
      </div>
    </div>
  )
}

export default Card
