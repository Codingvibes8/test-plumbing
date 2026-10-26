import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ApexFlow Plumbing & Heating | Slough & Surrounds',
  description: '24/7 Emergency Plumbers & Gas Safe Engineers in Slough, Windsor, Maidenhead. 4.9★ Rated, No Call-Out Fee.',
  keywords: 'plumber slough, emergency plumber, boiler installation, windsor plumbing, maidenhead heating',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-paper text-ink antialiased selection:bg-blue-600 selection:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
