import './App.css';
import BlogTable from './components/BlogTable.tsx';
import BlogListCard from './components/BlogListCard.tsx';
import { useState } from 'react';
import { blogs as initialBlog, IBlog } from './types/data.ts';
import Footer from './components/Footer.tsx';
import ModalRegister from './components/ModalRegister.tsx';
import Navbar from './components/Navbar.tsx';

function App() {
  const [blogs, setBlogs] = useState<IBlog[]>(initialBlog);
  const [active, setActive] = useState<boolean>(false);
  const [id, setId] = useState<number>(5);

  return (
    <div className={'app flex flex-col gap-y-6'}>
      <Navbar blogs={blogs} active={active} id={id} setId={setId} />
      <header className={'app-header'}></header>

      <hr />

      <BlogTable blogs={blogs} />
      <BlogListCard blogs={blogs} />

      <ModalRegister />

      <Footer></Footer>
    </div>
  );
}

export default App;
