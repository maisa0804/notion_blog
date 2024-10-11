import { CardProps } from "@/components/card/type";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import dateConvertorToLocalTime from "./dateConvertor";

const cardDataCOnvertor = (data: PageObjectResponse): CardProps | undefined => {
  let title = "";
  let img = "";
  let date;
  let tags;
  let slug;

  if ("title" in data.properties.Title && "rich_text" in data.properties.slug) {
    const titleType = data.properties.Title.title[0].type;
    const slugType = data.properties.slug.rich_text[0].type;

    if (
      "created_time" in data.properties.Date &&
      "multi_select" in data.properties.tags &&
      titleType === "text" &&
      slugType === "text"
    ) {
      if ("external" in data.cover! || "file" in data.cover!)
        title = data.properties.Title.title[0].text.content;
      if (data.cover)
        img =
          data.cover?.type === "external"
            ? data.cover.external.url
            : data.cover?.file.url;
      date = dateConvertorToLocalTime(data.properties.Date.created_time);
      tags = data.properties.tags.multi_select.map((tag) => tag.name);
      slug = data.properties.slug.rich_text[0].text.content;

      return {
        title,
        img,
        date,
        tags,
        slug,
      };
    }
  }
  return undefined;
};

export default cardDataCOnvertor;
