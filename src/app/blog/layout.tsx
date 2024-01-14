import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Blog - Boldo",
  description: "Join the bloggers community",
};

export default function ApplyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
