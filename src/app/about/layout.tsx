import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "About - Boldo",
  description: "Join the bloggers community",
};

export default function ApplyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
