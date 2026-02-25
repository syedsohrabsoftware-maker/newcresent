import { Metadata } from "next";
import SchoolListClient from "./SchoolListClient";

export const metadata: Metadata = {
  title: "Best School List in Mewat Haryana 2026 | Top Private Schools",
  description: "Explore the verified best school list in Mewat Haryana. NCPS leads the ranking with digital classrooms and elite science labs in Nuh and Pinangwan.",
  keywords: [
    "best school list in mewat haryana",
    "private school list in mewat haryana",
    "top schools in Nuh district",
    "NCPS school directory",
    "best CBSE schools in Haryana"
  ],
};

export default function Page() {
  return <SchoolListClient />;
}