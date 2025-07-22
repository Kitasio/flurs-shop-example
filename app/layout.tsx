import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from 'next/font/google';
import NavigationButtons from '../components/NavigationButtons';
import Footer from '../components/Footer';

// Example using Inter for sans-serif and Playfair Display for serif/brand
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '700'], // Include weights you might use
});


export const metadata: Metadata = {
  title: 'Flurs - Art Shop',
  description: 'Limited edition art prints by Flurs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <main>{children}</main>
        <NavigationButtons />
        <Footer />
      </body>
    </html>
  );
}
