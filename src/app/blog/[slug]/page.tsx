import LinkButton from "@/components/button/linkButton";
import { getPostBlock } from "@/lib/data/getPostBlocks";
import { getPost } from "@/lib/data/getPostBySlug";
import blockDataConvertor from "@/lib/functions/blockDataConvertor";
import { notion } from "@/lib/notion";
import { BlogParams } from "@/type/blogParam";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import Image from "next/image";

export default async function Blog({ params }: { params: BlogParams }) {

  const article = await getPost(params.slug)
  if (!article) {
    return <div> post is not found </div>
  }

  const block = await getPostBlock(article.id)

  const data = blockDataConvertor(article)

  const renderer = new NotionRenderer({
    client: notion
  })

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined))

  if (block && data) {
    const html = await renderer.render(...block)
    return (
      <>
        <div className="my-12">
          <h2 className="font-bold mb-6">{data.title}</h2>
          <p className="">{data.description}</p>
        </div>
        <div className="w-full h-[250px] overflow-y-hidden flex items-center">
          <Image src={data.image} alt="Article cover image"
            width={1920}
            height={250}
            style={{ objectPosition: 'center', objectFit: "cover" }}
            className="h-[250px] w-full"
          />
        </div>
        <div className="w-full lg:w-[380px] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-2 my-8 lg:my-12">
          <LinkButton title="Github" link={data.github as string} />
          <LinkButton title="Demo" link={data?.demo as string} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} className="pros notion w-full lg:min-w-[1000px] xl:min-w-[1280px]"></div>
      </>
    )
  }
  return (
    <div> post is not found </div>
  )
}

