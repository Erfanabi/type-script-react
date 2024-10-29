import { IPropsBlog } from '../types/data.ts';
import { FC } from 'react';

type TPropsBlogCard = Omit<IPropsBlog, 'blogs'>;

const BlogCard: FC<TPropsBlogCard> = ({ title, author, key }) => {
  return (
    <div className={'bg-gray-600'}>
      <p>{title}</p>
      <p>{author}</p>
      <p>{key}</p>
    </div>
  );
};

export default BlogCard;

// type TPropsBlogCard = Omit<IPropsBlog, 'blogs'>;  => "به غیر از"
