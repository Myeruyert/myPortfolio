import "@/styles/globals.css";
import { Inter } from "next/font/google";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <div className={inter.className}>
//       <Component {...pageProps} />
//     </div>
//   );
// }

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
