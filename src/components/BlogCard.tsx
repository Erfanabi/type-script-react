import { Blog, blogs as initialBlog } from '../types/data.ts';
import { useState } from 'react';

function BlogCard() {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlog);

  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className={'bg-blue-500'}>
      <p>BlogCard</p>

      {blogs.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        );
      })}

      <button onClick={() => setCheck(!check)}>
        Click Me : {check ? 'true' : 'false'}
      </button>
    </div>
  );
}

export default BlogCard;
