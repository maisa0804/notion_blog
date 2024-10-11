import React from "react";
import { notion } from "../notion";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import "server-only";

export const getPostBlock = React.cache(async (pageId: string) => {
  try {
    const res = await notion.blocks.children.list({
      block_id: pageId,
    });

    return res.results as BlockObjectResponse[];
  } catch (error) {
    console.error("Something went wrond while getting block data", error);
    return undefined;
  }
});
