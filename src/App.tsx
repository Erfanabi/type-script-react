import './App.css';
import BlogTable from './components/BlogTable.tsx';
import BlogListCard from './components/BlogListCard.tsx';
import { useState } from 'react';
import { blogs as initialBlog, IBlog } from './types/data.ts';
import Footer from './components/Footer.tsx';
import ModalRegister from './components/ModalRegister.tsx';
import Navbar from './components/Navbar.tsx';
import Body from './components/Body.tsx';
import Button from './components/Button.tsx';

function App() {
  const [blogs, setBlogs] = useState<IBlog[]>(initialBlog);
  const [active, setActive] = useState<boolean>(false);
  const [id, setId] = useState<number>(5);

  return (
    <div className={'app flex flex-col gap-y-6'}>
      <Navbar blogs={blogs} active={active} id={id} setId={setId} />

      {/*<Button>*/}
      {/*  <div>Click Me</div>*/}
      {/*</Button>*/}

      <Button>Click Me</Button>

      <header className={'app-header'}></header>

      <hr />
      <Body />
      <hr />

      <BlogTable blogs={blogs} />
      <BlogListCard blogs={blogs} />

      <ModalRegister />

      <Footer></Footer>
    </div>
  );
}

export default App;
