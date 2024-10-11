import { SnipetProps } from '../notionSnippet/type'

const NumList = ({ block }: SnipetProps) => {

  if (block.type === "numbered_list_item") {
    return (
      <li className='my-4'>
        {block.numbered_list_item.rich_text.map((item, index) => {
          if (item.plain_text.startsWith(":")) {
            return (
              <>
                <span key={index} className='text-xl'>{item.plain_text.split(":")[1]}</span>
              </>
            )
          } else {
            return (
              <span key={index} className='text text-xl font-bold mr-3'>
                <span>{index + 1}. </span> {item.plain_text}
              </span>
            )
          }
        })}
      </li>
    )
  }
}

export default NumList