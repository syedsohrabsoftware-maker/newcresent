import { Metadata } from "next";
import PrivateSchoolClient from "./PrivateSchoolClient"; // Ab isi folder se import ho raha hai

export const metadata: Metadata = {
  title: "Private School in Mewat Nuh Haryana | Best Education at NCPS",
  description: "Find the best private school in Mewat Nuh Haryana. NCPS offers premium CBSE education, digital classrooms, and safe transport for students in Nuh & Punhana.",
  keywords: [
    "private school in mewat nuh haryana",
    "best school in nuh",
    "top private schools Haryana",
    "NCPS Mewat campus"
  ],
};

export default function Page() {
  return <PrivateSchoolClient />;
}