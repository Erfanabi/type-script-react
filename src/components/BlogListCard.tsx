import { useState } from 'react';
import { IBlog } from '../types/data.ts';

function BlogListCard({ blogs }: { blogs: IBlog[] }) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className={'bg-blue-500'}>
      <p>BlogCard</p>

      {blogs.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
            <h6>{item.author}</h6>
          </div>
        );
      })}

      <button onClick={() => setCheck(!check)}>
        Click Me : {check ? 'true' : 'false'}
      </button>
    </div>
  );
}

export default BlogListCard;
