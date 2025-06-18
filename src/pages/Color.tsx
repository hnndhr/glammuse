"use client";
import { Header } from '@/components/Header';
import { HeroColor } from '@/components/HeroColor';
import { ColorFilterBox } from '@/components/ColorFilterBox';
import { InstructionsSection } from '@/components/InstructionSection';
import { Footer } from '@/components/Footer';
function Color() {
  return (
    <div className="flex relative flex-col bg-white">
      <Header />
      <HeroColor />
      <main className="overflow-hidden z-0 px-52 pt-5 pb-10 w-full bg-white max-md:px-5 max-md:max-w-full">
        <ColorFilterBox />
        <div className="mt-9 w-full border border-black border-solid min-h-0.5 max-md:max-w-full" />
        <InstructionsSection />
      </main>
      <Footer />
    </div>
  );
}

export default Color;
