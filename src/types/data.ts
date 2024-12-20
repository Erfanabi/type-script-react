export interface IBlog {
  title: string;
  author: string;
  image: string;
  text?: string;
}

export const blogs: IBlog[] = [
  {
    title: 'React Tailwind Card with Grid 1',
    author: 'Erfan Yousefi',
    image: 'https://picsum.photos/536/354',
    // text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
  },
  {
    title: 'React Tailwind Card with Grid 2',
    author: 'Erfan Yousefi',
    image: 'https://picsum.photos/id/237/536/354',
    text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
  },
  {
    title: 'React Tailwind Card with Grid 3',
    author: 'Erfan Yousefi',
    image: 'https://picsum.photos/seed/picsum/536/354',
    text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
  },
  {
    title: 'React Tailwind Card with Grid 4',
    author: 'Erfan Yousefi',
    image: 'https://picsum.photos/id/1060/536/354?blur=2',
    text: 'react tailwind css card with image It is a long established fact that a reader will be distracted by the readable text',
  },
];

export interface IPropsBlog {
  blogs: IBlog[];
  title: string;
  author: string;
  key: number;
}
