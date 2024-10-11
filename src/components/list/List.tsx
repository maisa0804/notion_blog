import { SnipetProps } from '../notionSnippet/type'

const List = ({ block }: SnipetProps) => {

  if (block.type === "bulleted_list_item")
    return (
      <li className='text text-xl font-bold'>
        <span className='w-2 h-2 rounded-full bg-sky-50 inline-block mr-2'></span>
        {block.bulleted_list_item.rich_text[0].plain_text}
      </li>
    )
}

export default List
