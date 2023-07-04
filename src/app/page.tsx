import AnotherStudioCard from "@/components/card/AnotherStudioCard";
import Header from "../components/home/Header";
import HeaderContent from "../components/home/HeaderContent";
import HomeView from "../components/home/HomeView";

export default function Home() {
  return (
    <main>
      <Header />
      <HeaderContent />
      <HomeView />
      <AnotherStudioCard />
    </main>
  );
}
