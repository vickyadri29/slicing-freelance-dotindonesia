import AnotherStudioCard from "@/components/card/AnotherStudioCard";
import Header from "@/components/home/Header";
import HeaderContent from "@/components/home/HeaderContent";
import HomeView from "@/components/home/HomeView";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeaderContent />
      <HomeView />
      <AnotherStudioCard />
      <Footer />
    </main>
  );
}
