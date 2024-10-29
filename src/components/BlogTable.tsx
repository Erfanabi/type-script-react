import { IPropsBlog } from '../types/data.ts';
import { FC } from 'react';
import BlogCard from './BlogCard.tsx';

type TPropsBlogTable = Omit<IPropsBlog, 'author' | 'key' | 'title'>;

const BlogTable: FC<TPropsBlogTable> = ({ blogs }) => {
  return (
    <div className={'bg-green-300'}>
      <p>BlogTable</p>

      {blogs.map((item, key) => {
        return <BlogCard key={key} title={item.title} author={item.author} />;
      })}
    </div>
  );
};

export default BlogTable;
