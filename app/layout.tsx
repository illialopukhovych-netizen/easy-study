import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Easy Study — навчання без зайвого",
  description: "Особистий простір для навчання, розкладу та завдань.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body><AppShell>{children}</AppShell></body>
    </html>
  );
}
