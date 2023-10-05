"use client";
import "../styles/global.css";

import { Provider } from "react-redux";
import store from "../store";

// export const metadata = {
//   icons: [
//     {
//       rel: "apple-touch-icon",
//       url: "/apple-touch-icon.png",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "32x32",
//       url: "/favicon-32x32.png",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "16x16",
//       url: "/favicon-16x16.png",
//     },
//     {
//       rel: "icon",
//       url: "/favicon.ico",
//     },
//   ],
// };

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
