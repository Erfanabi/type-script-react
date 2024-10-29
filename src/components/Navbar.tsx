import { IBlog } from '../types/data.ts';

interface NavbarProps {
  blogs: IBlog[];
  active: boolean;
  id: number;
}

function Navbar({ blogs, active, id }: NavbarProps) {
  return (
    <div className={'bg-amber-400'}>
      <p>{id}</p>
    </div>
  );
}

export default Navbar;
