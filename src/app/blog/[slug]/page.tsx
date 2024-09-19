import { getPostBlock } from "@/lib/data/getPostBlocks";
import { getPost } from "@/lib/data/getPostBySlug";
import { notion } from "@/lib/notion";
import { BlogParams } from "@/type/blogParam";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";

export default async function Blog({ params }: { params: BlogParams }) {

  const article = await getPost(params.slug)

  if (!article) {
    return <div> post is not found </div>
  }

  const block = await getPostBlock(article.id)

  if (block) {
    console.log("This is block-----------------------------ß")

  } else {
    console.log("couldnt find")
  }

  const renderer = new NotionRenderer({
    client: notion
  })

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined))

  if (block) {
    const html = await renderer.render(...block)
    return (
      <div dangerouslySetInnerHTML={{ __html: html }} className="pros"></div>
    )
  }


  return (
    <div> post is not found </div>
  )
}

