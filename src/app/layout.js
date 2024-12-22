import localFont from "next/font/local";
import "./globals.css";
import { HotjarInitialiser } from "@/app/components/HotjarInitialiser";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Sean Chen",
  description: "Sean Chen portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <HotjarInitialiser />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
