import React from "react"
import { notion } from "../notion"
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import 'server-only';

export const getPost = React.cache(async(slug: string) => {
  try {
    const res = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug
        }
      }
    })

    const post = res.results[0] as PageObjectResponse | undefined
    return post
  } catch (error) {
    console.error("Something went wrond while getting post data", error)
     return undefined
  }
})