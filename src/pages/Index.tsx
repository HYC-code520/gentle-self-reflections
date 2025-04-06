
import React from 'react';
import Header from '@/components/Header';
import JournalEntry from '@/components/JournalEntry';
import InfoCard from '@/components/InfoCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-softPink/20">
      <Header />
      
      <main className="flex-1 container mx-auto py-8 flex flex-col items-center gap-8">
        <InfoCard />
        <JournalEntry />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
