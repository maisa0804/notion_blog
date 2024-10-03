import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import React from 'react'
import Paragragh from './paragragh'
import Code from './code'
import Heading from './heading'

const NotionSnipet = ({ blocks }: { blocks: BlockObjectResponse[] }) => {
  return <>
    {blocks && blocks.map((block: BlockObjectResponse) => {
      const { type } = block
      if (type === 'paragraph') {
        return <Paragragh key={block.id} block={block} />
      } else if (type === 'code') {
        return <Code key={block.id} block={block} />
      } else if (type === 'heading_1' || type === 'heading_2' || type === 'heading_3') {
        return <Heading key={block.id} block={block} />
      }
    })}
  </>
}

export default NotionSnipet
