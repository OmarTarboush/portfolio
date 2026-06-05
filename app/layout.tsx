import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Omar Tarboush - Flutter Mobile App Developer",
    template: "%s - Omar Tarboush",
  },
  description:
    "Flutter mobile app developer and AI developer with production apps across Firebase, GetX, Riverpod, REST, GraphQL, maps, and secure workflows.",
  openGraph: {
    title: "Omar Tarboush - Flutter Mobile App Developer",
    description:
      "Production mobile apps, secure workflows, Firebase systems, and polished Flutter interfaces.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
