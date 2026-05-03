import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import ChatButton from '@/components/Chatbot/ChatButton';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Appartamenti Vela Milano — Un\'oasi verde nel cuore di Milano',
  description:
    'Tre appartamenti luminosi a 400 m dalla metro Piola. Parquet chiaro, balconi con piante, cucine attrezzate, garage privato. 9.2/10 su Booking.',
  metadataBase: new URL('https://appartamentivelamilano.it'),
  openGraph: {
    title: 'Appartamenti Vela Milano',
    description: 'Il green pocket di Milano — abiti il verde a 400 m dalla metro Piola.',
    images: ['/photos/esterno_1.jpg'],
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <ChatButton />
      </body>
    </html>
  );
}
