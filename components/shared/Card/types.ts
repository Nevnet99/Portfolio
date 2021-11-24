export interface CardProps {
    type: 'blog' | 'project';
    title?: string;
    date?: string;
    image?: { src: string };
}
