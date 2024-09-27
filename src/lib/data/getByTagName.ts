import React from "react";
import { notion } from "../notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { CardProps } from "@/components/card/type";
export const getPostsByTagName = React.cache(async (tag: string) => {
  try {
    const res = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "tags",
        multi_select: {
          contains: tag,
        },
      },
    });
    const posts = res.results as PageObjectResponse[] | undefined;

    const atriclesWithTag = posts?.map((article): CardProps => {
      const title = article.properties.Title.title[0].text.content;
      const img = article.cover!.external.url;
      const date = article.properties.Date.created_time;
      const tags = article.properties.tags.multi_select.map((tag) => tag.name);
      const slug = article.properties.slug.rich_text[0].text.content;

      return {
        title,
        img,
        date,
        tags,
        slug,
      };
    });

    return atriclesWithTag;
  } catch (error) {
    console.error("Something went wrond while getting post data", error);
    return undefined;
  }
});
