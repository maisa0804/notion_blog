import LinkButton from "@/components/button/linkButton";
import { getPostBlock } from "@/lib/data/getPostBlocks";
import { getPost } from "@/lib/data/getPostBySlug";
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
  const renderer = new NotionRenderer({
    client: notion
  })

  let title = '';
  let description = '';
  let github = '';
  let demo = '';

  if (
    article.properties.Title.type === 'title' &&
    article.properties.description.type === 'rich_text'
  ) {
    const titleItem = article.properties.Title.title[0];
    if (titleItem.type === 'text') {
      title = titleItem.text.content;
    }
    const descriptionItem = article.properties.description.rich_text[0];
    if (descriptionItem.type === 'text') {
      description = descriptionItem.plain_text;
    }
  }

  if (article.properties.github.type === 'url' && article.properties.demo.type === "url") {
    github = article.properties.github.url!
    demo = article.properties.demo.url!
  } else {
    console.log('The property is not of type "url".');
  }

  renderer.use(hljsPlugin({}));
  renderer.use(bookmarkPlugin(undefined))

  const coverUrl =
    article.cover?.type === 'external'
      ? article.cover.external.url
      : article.cover?.type === 'file'
        ? article.cover.file.url
        : null;

  if (block) {
    const html = await renderer.render(...block)
    return (
      <>
        <div className="my-12">
          <h2 className="font-bold mb-6">{title}</h2>
          <p className="">{description}</p>
        </div>

        {coverUrl && (
          <div className="w-full h-[250px] overflow-y-hidden flex items-center">
            {
              <Image src={coverUrl} alt="Article cover image"
                width={1920}
                height={250}
                style={{ objectPosition: 'center', objectFit: "cover" }}
                className="h-[250px] w-full"
              />
            }
          </div>
        )}
        <div className="w-full lg:w-[380px] grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-2 my-8 lg:my-12">
          <LinkButton title="Github" link={github} />
          <LinkButton title="Demo" link={demo} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} className="pros notion w-full lg:min-w-[1000px] xl:min-w-[1280px]"></div>
      </>
    )
  }
  return (
    <div> post is not found </div>
  )
}

