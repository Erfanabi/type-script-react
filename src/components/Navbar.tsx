import { IBlog } from '../types/data.ts';
import { Dispatch, JSX, SetStateAction } from 'react';

interface NavbarProps {
  blogs: IBlog[];
  active: boolean;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}

function Navbar({ blogs, active, id, setId }: NavbarProps) {
  const FOOTER: JSX.Element = (
    <div className={'bg-amber-400'}>
      <p>{id}</p>

      <button onClick={() => setId((prev) => prev + 1)}>
        now click me!: {id}
      </button>
    </div>
  );

  return { FOOTER };
}

export default Navbar;
