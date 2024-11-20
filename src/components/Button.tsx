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

type Color = 'red' | 'blue' | 'green' | 'black';

type ButtonProps = {
  backgroundColor: string;
  textColor: Color;
  fontSize: number;
  isShape?: boolean;
  // padding: number[];
  padding: [number, number, string, number];
};

function Button({ backgroundColor, fontSize, textColor }: ButtonProps) {
  return (
    <button
      style={{ backgroundColor, fontSize, color: textColor }}
      className="bg-red-500 px-4 py-2 w-fit ms-5 rounded-lg text-white"
    >
      Button
    </button>
  );
}

export default Button;
