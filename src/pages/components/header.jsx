const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-20">
      <h1 className="text-3xl font-bold">TOM</h1>
      <div className="flex text-base items-center gap-6">
        <ul className="flex gap-6">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <button className="bg-black text-white rounded-lg py-1.5 px-4">
          Download CV
        </button>
      </div>
    </header>
  );
};

export default Header;

// const NavButtons = () => {
//   const [theme, SetTheme] = useState(true);
//   return (
//     <div className="flex items-center">
//       {theme ? (
//         <MdOutlineLightMode
//           onClick={() => {
//             console.log("dark");
//             SetTheme(false);
//           }}
//         />
//       ) : (
//         <MdOutlineDarktMode />
//       )}
//     </div>
//   );
// };

// const ModeIcon = ({ theme }) => {
//   if (theme) {
//     return (
//       <MdOutlineLightMode
//         onClick={() => {
//           console.log("dark");
//           SetTheme(false);
//         }}
//       />
//     );
//   } else {
//     return <MdOutlineDarktMode />;
//   }
// };
