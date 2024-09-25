import React from 'react'
import { CardProps } from './type'
import Image from 'next/image'

const Card = ({ title, img, tags, date }: CardProps) => {

  return (
    <div className='max-w-[266px] w-full h-full flex flex-col tracking-wide'>
      <Image
        src={img}
        alt="Sample Image"
        width={286}
        height={216}
        layout='responsive'
        className='rounded-lg'
      />
      <ul className='flex justify-start items-center gap-1 my-4 w-full flex-wrap'>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <span className='bg-foreground text-background text-xs py-1 px-3 rounded-[25px]'>{tag}</span>
            </li>)
        })}
      </ul>
      <h2 className='text-lg font-bold'>{title}</h2>
      <p className='text-xs mt-5 text-gray-100 font-thin'>
        <span>{date.toString()}</span>
      </p>
    </div>
  )
}

export default Card
