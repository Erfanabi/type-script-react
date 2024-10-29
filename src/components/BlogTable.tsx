import { IBlog } from '../types/data.ts';
import { FC } from 'react';

interface BlogTableProps {
  blogs: IBlog[];
}

const BlogTable: FC<BlogTableProps> = ({ blogs }) => {
  return (
    <div className={'bg-green-300'}>
      <p>BlogTable</p>

      {blogs.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogTable;
