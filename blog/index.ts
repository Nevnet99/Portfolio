import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';
// INDEX
export interface Props {
    database: QueryDatabaseResponse;
}

export interface StaticProps {
    props: {
        database: QueryDatabaseResponse;
    };
}

// [SLUG]

// TODO: REFACTOR THESE THEY CAN BE CLEANER

export interface StaticPathsProps {
    paths: [
        {
            params: {
                slug: string;
            };
        }
    ];
    fallback: boolean;
}

export interface SlugProps {
    recordMap: any;
    database: QueryDatabaseResponse;
    pageId: string;
}

export interface SlugStaticReturn {
    props: {
        recordMap: any;
        database: QueryDatabaseResponse;
        pageId: string;
    };
}

export interface SlugStaticProps {
    params: { slug: string };
}
