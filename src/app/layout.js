import { Raleway } from 'next/font/google';

import './globals.css';

import { ThemeProvider } from '@/contexts/themeContext';

const raleway = Raleway({
  sans: ['Raleway', 'sans-serif'],
  opensans: ['Open Sans', 'sans-serif'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${raleway.className} dark:bg-darkBlue dark:text-white font-opensans`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
