import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lilita+One&family=Oleo+Script:wght@400;700&family=Sora:wght@100..800&display=swap" rel="stylesheet"/>
            

            </head>
            <body>
              {children}
            </body>
      </html>
          );
}
