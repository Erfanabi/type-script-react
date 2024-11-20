// function Button(props: { backgroundColor: string }) {
//   const { backgroundColor } = props;
//
//   return (
//     <button
//       style={{ backgroundColor }}
//       className="bg-red-500 px-4 py-2 w-fit ms-5 rounded-lg text-white"
//     >
//       Button
//     </button>
//   );
// }
//
// export default Button;

// ************

// function Button({
//   backgroundColor,
//   fontSize,
//   isShape,
// }: {
//   backgroundColor: string;
//   fontSize: number;
//   isShape: boolean;
// }) {
//   console.log({ isShape });
//   return (
//     <button
//       style={{ backgroundColor, fontSize }}
//       className="bg-red-500 px-4 py-2 w-fit ms-5 rounded-lg text-white"
//     >
//       Button
//     </button>
//   );
// }
//
// export default Button;

// ************

import { CSSProperties } from 'react';

type ButtonProps = {
  styles: CSSProperties;
};

function Button({ styles }: ButtonProps) {
  return (
    <button
      style={styles}
      className="bg-red-500 px-4 py-2 w-fit ms-5 rounded-lg text-white"
    >
      Button
    </button>
  );
}

export default Button;
