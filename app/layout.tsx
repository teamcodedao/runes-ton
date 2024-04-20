import type {Metadata} from 'next';
import {Almendra} from 'next/font/google';
import localFont from 'next/font/local';
import clsx from 'clsx';

import './globals.css';

const almendra = Almendra({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const comicRune = localFont({
  src: './ComicRunes.otf',
  variable: '--font-comic-rune',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Runestone Blue',
  description: 'Runes are here. Bring Runeston To Diamond Class!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(almendra.className, comicRune.variable)}>
        {children}
      </body>
    </html>
  );
}
