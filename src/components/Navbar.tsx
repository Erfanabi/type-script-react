import { IBlog } from '../types/data.ts';
import { Dispatch, SetStateAction } from 'react';

interface NavbarProps {
  blogs: IBlog[];
  active: boolean;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}

function Navbar({ id, setId }: NavbarProps) {
  return (
    <div className={'bg-amber-400'}>
      <p>{id}</p>

      <button onClick={() => setId((prev) => prev + 1)}>
        now click me!: {id}
      </button>
    </div>
  );
}

export default Navbar;
