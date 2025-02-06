import type { Metadata } from "next";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "How to Dapp",
  description: "Learn how to use our dapp",
};

export default function HowToDappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}