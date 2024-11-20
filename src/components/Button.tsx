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

type ButtonProps = {
    borderRadius: Record<string, string>;
};

function Button({borderRadius}: ButtonProps) {
    console.log(borderRadius);

    return (
        <button
            style={borderRadius}
            className="bg-red-500 px-4 py-2 w-fit ms-5 text-white"
        >
            Button
        </button>
    );
}

export default Button;

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
