import './App.css';
import Navbar from './components/Navbar.tsx';
import BlogTable from './components/BlogTable.tsx';
import BlogCard from './components/BlogCard.tsx';
import { useState } from 'react';
import { blogs as initialBlog, IBlog } from './types/data.ts';
import Footer from './components/Footer.tsx';

function App() {
  const [blogs, setBlogs] = useState<IBlog[]>(initialBlog);
  const [active, setActive] = useState<boolean>(false);
  const [id, setId] = useState<number>(5);

  return (
    <div className={'app flex flex-col gap-y-6'}>
      <Navbar blogs={blogs} active={active} id={id} />
      <header className={'app-header'}></header>

      <hr />

      <BlogTable blogs={blogs} />
      <BlogCard blogs={blogs} />

      <Footer></Footer>
    </div>
  );
}

export default App;
