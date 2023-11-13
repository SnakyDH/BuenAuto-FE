import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Sign In - Buen Auto',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
