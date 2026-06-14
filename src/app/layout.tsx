import type { Metadata } from 'next';
import { Fira_Code, Fraunces } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

export const metadata: Metadata = {
  title: 'Future Career Pathway Generator',
  description: 'Mapping Your Child\'s Future Pathway',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${firaCode.variable} ${fraunces.variable} antialiased font-sans bg-background text-on-background`}>
        {children}
      </body>
    </html>
  );
}
