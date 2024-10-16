import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const blockDataConvertor = (data: PageObjectResponse) => {
  let title;
  let description;
  let github;
  let demo;
  let tags;
  let image;

  if (
    "title" in data.properties.Title &&
    "rich_text" in data.properties.description
  ) {
    const titleType = data.properties.Title.title[0].type;
    const desctiptionType = data.properties.description.rich_text[0].type;

    if (
      "url" in data.properties.github &&
      "url" in data.properties.demo &&
      "multi_select" in data.properties.tags &&
      titleType === "text" &&
      desctiptionType === "text"
    ) {
      if ("external" in data.cover! || "file" in data.cover!) {
        image =
          data.cover?.type === "external"
            ? data.cover.external.url
            : data.cover?.file.url;
        title = data.properties.Title.title[0].plain_text;
        description = data.properties.description.rich_text
          .map((item) => item.plain_text)
          .join("");
        github = data.properties.github.url;
        demo = data.properties.demo.url;
        tags = data.properties.tags.multi_select.map((tag) => tag.name);

        return {
          title,
          description,
          github,
          demo,
          tags,
          image,
        };
      }
    }
  }

  return;
};

export default blockDataConvertor;
