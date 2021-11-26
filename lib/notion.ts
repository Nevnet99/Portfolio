import { Client } from '@notionhq/client';
import { GetPageResponse, QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionAPI } from 'notion-client';

const api = new NotionAPI();

// Using two wrappers as notion-client does not support reading databases in notion well,
// and notionHQ does not support a nice way to render a notion page.

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: string): Promise<QueryDatabaseResponse> => {
  const db = await notion.databases.query({
    database_id: databaseId,
  });

  return db;
};

export const getPage = async (pageId: string): Promise<GetPageResponse> => {
  const page = await notion.pages.retrieve({ page_id: pageId });
  return page;
};

export const getRecordMap = async (pageId: string): Promise<any> => {
  const recordMap = await api.getPage(pageId);
  return recordMap;
};
