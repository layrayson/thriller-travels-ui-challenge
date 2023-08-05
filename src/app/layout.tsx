import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Buy Ticket | Ticket4U',
  description: 'Seamlessly find a ticket',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="Flight Ticket,Book Ticket,Book Ship, Book Flight, Book trip, travel ticket, "
        />

        <meta property="og:title" content="Buy Ticket | Ticket4U" />
        <meta
          property="og:description"
          content="Book your flight tickets at Ticket4U for the best travel experience."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://thriller-travels-ui-challenge.vercel.app/"
        />
        <meta name="twitter:title" content="Buy Ticket | Ticket4U" />
        <meta
          name="twitter:description"
          content="Book your flight tickets at Ticket4U for the best travel experience."
        />

        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
