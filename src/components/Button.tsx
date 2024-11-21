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

// type ButtonProps = {
//     borderRadius: Record<string, string>;
// };
//
// function Button({borderRadius}: ButtonProps) {
//     console.log(borderRadius);
//
//     return (
//         <button
//             style={borderRadius}
//             className="bg-red-500 px-4 py-2 w-fit ms-5 text-white"
//         >
//             Button
//         </button>
//     );
// }
//
// export default Button;

// ----------

// type UserInfo = {
//   name: string;
//   age: number;
// };
//
// type Users = Record<string, UserInfo>;
//
// const userDatabase: Users = {
//   user1: { name: 'Alice', age: 25 },
//   user2: { name: 'Bob', age: 30 },
// };

// ----------

// type Roles = "admin" | "user" | "guest";
//
// type RoleDescriptions = Record<Roles, string>;
//
// const roleDescriptions: RoleDescriptions = {
//   admin: "Has full access",
//   user: "Can view and edit",
//   guest: "Can only view"
// };

// ----------

// ************

// type ButtonProps = {
//   // children: React.ReactNode;
//   children: JSX.Element;
// };
//
// function Button({ children }: ButtonProps) {
//   return (
//     <button className="bg-red-500 px-4 py-2 w-fit ms-5 text-white">
//       {children}
//     </button>
//   );
// }
//
// export default Button;

// ************

// type TUrl = string;

// const url: TUrl = 'http://localhost:3000';

// interface IUrl {
//   url: string;
// }

// const url: IUrl = {
//   url: 'http://localhost:3000',
// };

// function Button() {
//   return (
//     <button className="bg-red-500 px-4 py-2 w-fit ms-5 text-white">
//       click me
//     </button>
//   );
// }

// export default Button;

// ************

// import React, { forwardRef } from 'react';
//
// type ButtonProps = React.ComponentPropsWithRef<'button'>;
//
// const Button = forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ type = 'button', ...rest }, ref) => {
//     return (
//       <button
//         ref={ref}
//         type={type} // نوع دکمه
//         className="bg-red-500 px-4 py-2 w-fit ms-5 text-white"
//         {...rest} // سایر props
//       >
//         click me
//       </button>
//     );
//   },
// );
//
// export default Button;

// ************

// interface IButton {
//   type: 'button' | 'submit';
//   color: 'red' | 'green' | 'blue';
// }

// interface IButtonText extends IButton {
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
// }

// type TButton = {
//   type: 'button' | 'submit';
//   color: 'red' | 'green' | 'blue';
// };

// type TButtonText = IButton & {
//   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
// };

// function Button({ type, color }: IButtonText) {
//   return (
//     <button
//       className="bg-red-500 px-4 py-2 w-fit ms-5 text-white"
//       type={type}
//       style={{ color }}
//     >
//       click me
//     </button>
//   );
// }
//
// export default Button;

// ************

// function Button() {
//   return (
//     <button
//       className="bg-red-500 px-4 py-2 w-fit ms-5 text-white"
//       onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//         console.log(e);
//       }}
//     >
//       click me
//     </button>
//   );
// }
//
// export default Button;

// ************

// import { useState } from 'react';
//
// type TUser = {
//   name: string;
//   family: string;
//   age: number;
// };
//
// function Button() {
//   const [count, setCount] = useState<number>(0);
//   const [test, setTest] = useState<string>('');
//   const [isLoaded, setIsLoaded] = useState<boolean>(false);
//   const [user, setUser] = useState<TUser | null>(null);
//
//   console.log(user?.name);
//
//   return (
//     <button className="bg-red-500 px-4 py-2 w-fit ms-5 text-white">
//       click me
//     </button>
//   );
// }
//
// export default Button;

// ************

const buttonText = [
  'click me',
  'click me again!',
  'click me one more time!',
] as const;

buttonText[0] = 'new text';

function Button() {
  return (
    <button className="bg-red-500 px-4 py-2 w-fit ms-5 text-white">
      {buttonText.map((item) => item)}
    </button>
  );
}

export default Button;
