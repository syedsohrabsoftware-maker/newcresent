// app/gallery/page.tsx
import GalleryClient from "./GalleryClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery & Hall of Fame 2026 | NCPS Pinangwan",
  description: "New Crescent Public School ke achievers aur modern campus ki jhalak. Dekhiye hamare toppers aur high-tech facilities.",
  keywords: ["NCPS Toppers", "School Gallery Pinangwan", "Merit Circle Mewat"],
};

export default function Page() {
  return <GalleryClient />;
}