import React from 'react'
import { SnipetProps } from './type'

const Heading = ({ block }: SnipetProps) => {

  const type = block.type

  switch (type) {
    case 'heading_1':
      return <h1 className='notion-h1 font-bold my-8'>{block.heading_1.rich_text.map(text => text.plain_text).join('')}</h1>
    case 'heading_2':
      return <h2 className='notion-h2 font-bold my-8'> {block.heading_2.rich_text.map(text => text.plain_text).join('')} </h2>
    case 'heading_3':
      return <h3 className='notion-h3 text-2xl font-bold my-8'> {block.heading_3.rich_text.map(text => text.plain_text).join('')}</h3>
    default:
      return undefined
  }
}

export default Heading
