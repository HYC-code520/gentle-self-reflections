import React from "react";
import Header from "@/components/Header";
import JournalEntry from "@/components/JournalEntry";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-pink-50 text-gray-800">
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex flex-col items-center gap-4">
        <InfoCard />
        <JournalEntry />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
