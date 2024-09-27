import React from "react";
import { notion } from "../notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { CardProps } from "@/components/card/type";
import cardDataCOnvertor from "../functions/cardDataConvertor";
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

    const atriclesWithTag = posts?.map((article): CardProps | undefined => {
      const post = cardDataCOnvertor(article);
      return post;
    });

    return atriclesWithTag;
  } catch (error) {
    console.error("Something went wrond while getting post data", error);
    return undefined;
  }
});
