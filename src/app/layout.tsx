import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '700',
      style: 'normal',

    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '400',
      style: 'italic',
    },
  ]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
