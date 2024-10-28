import './App.css';
import Navbar from './components/Navbar.tsx';
import BlogTable from './components/BlogTable.tsx';
import BlogCard from './components/BlogCard.tsx';

function App() {
  return (
    <div className={'app flex flex-col gap-y-6'}>
      <Navbar />
      <header className={'app-header'}></header>

      <hr />

      <BlogTable></BlogTable>
      <BlogCard></BlogCard>
    </div>
  );
}

export default App;
