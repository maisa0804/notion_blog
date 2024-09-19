import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import React from "react"
import { notion } from "../notion"
import 'server-only';

export const getAllPosts = React.cache(async() => {
  try {
    const res = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "status",
        status: {
          equals: "Published"
        }
      }
    })
    return res.results as PageObjectResponse[] | undefined

  } catch (error) {
     console.error("Something went wrond while getting posts data", error)
     return undefined
  }
})