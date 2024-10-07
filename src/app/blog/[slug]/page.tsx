import LinkButton from "@/components/button/linkButton";
import NotionSnipet from "@/components/notionSnippet";
import { getPostBlock } from "@/lib/data/getPostBlocks";
import { getPost } from "@/lib/data/getPostBySlug";
import blockDataConvertor from "@/lib/functions/blockDataConvertor";
import { BlogParams } from "@/type/blogParam";
import Image from "next/image";
import Container from "@/components/containers/container";

export default async function Blog({ params }: { params: BlogParams }) {

  const article = await getPost(params.slug)
  

  if (article) {
    const blocks = await getPostBlock(article.id)
    const data = blockDataConvertor(article)

    if (data && blocks)
      return (
        <Container>
          <div className="my-12">
            <h2 className="font-bold mb-6">{data.title}</h2>
            <p className="">{data.description}</p>
          </div>
          <div className="w-full h-[250px] flex items-center">
            <Image src={data.image}
              alt="Article cover image"
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
          <NotionSnipet blocks={blocks} />
        </Container>)
  }
}

