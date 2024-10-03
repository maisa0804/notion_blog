import { SnipetProps } from "./type"

const Paragragh = ({ block }: SnipetProps) => {

  if (block.type === "paragraph") {
    if (block.paragraph.rich_text[0] === undefined) return null
    if (block.type === 'paragraph' && block.paragraph.rich_text[0].plain_text) {
      return (
        <p className="notion-p my-4">
          {block.paragraph.rich_text[0].plain_text}
        </p>
      )
    }
  }
}

export default Paragragh
