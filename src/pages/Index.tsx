import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Featured onOpenModal={() => setModalOpen(true)} />
      <Promo onOpenModal={() => setModalOpen(true)} />
      <Footer onOpenModal={() => setModalOpen(true)} />
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Index;
