import { Client } from '@notionhq/client';
import 'server-only';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN!
})
