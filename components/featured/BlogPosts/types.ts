// TODO: Fix typing for client notion api
export interface Props {
    blogPosts: any[];
    related?: boolean;
    title?: string;
    link?: {
        href: string;
        text: string;
    };
}

export interface WrapperProps {
    related: boolean | undefined;
}
