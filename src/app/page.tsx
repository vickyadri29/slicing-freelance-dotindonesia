import Image from "next/image";
import Header from "../components/Header";
import HeaderContent from "@/components/HeaderContent";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto p-5">
      <Header />
      <HeaderContent />
    </main>
  );
}
