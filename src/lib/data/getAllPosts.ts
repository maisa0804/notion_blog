import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { notion } from "../notion";
import "server-only";
import cardDataCOnvertor from "../functions/cardDataConvertor";

export const getAllPosts = React.cache(async () => {
  try {
    const res = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "status",
        status: {
          equals: "Published",
        },
      },
    });

    const posts = res.results as PageObjectResponse[] | undefined;

    const alldata = posts?.map((result) => cardDataCOnvertor(result));

    return alldata;
  } catch (error) {
    console.error("Something went wrond while getting posts data", error);
    return undefined;
  }
});
