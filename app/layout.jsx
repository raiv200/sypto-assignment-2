import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'], subsets: ["latin"] });

export const metadata = {
  title: "Sypto Travels",
  description: "A Travel webiste landing website made with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
