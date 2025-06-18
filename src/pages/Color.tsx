import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import HeroColor from "@/components/ColorMatch/HeroColor";
import ColorFilterBox from "@/components/ColorMatch/ColorFilterBox";
import  InstructionSection from "@/components/ColorMatch/InstructionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const [currentSeason, setCurrentSeason] = useState("Summer");
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];

  // Seasonal backgrounds and color palettes
  const seasonalBackgrounds = {
    Spring: {
      bgImage:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      palette:
        "bg-gradient-conic from-pink-200 via-green-200 via-yellow-200 via-blue-200 to-pink-200",
    },
    Summer: {
      bgImage:
        "https://cdn.builder.io/api/v1/image/assets/58cd6d364fff4966b7ea43a323aeb3d1/84fdab07600b1c72c1a810564b2b36933dec8e22?placeholderIfAbsent=true",
      palette:
        "bg-gradient-conic from-blue-300 via-purple-300 via-pink-300 via-rose-300 to-blue-300",
    },
    Autumn: {
      bgImage:
        "https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
      palette:
        "bg-gradient-conic from-orange-400 via-red-400 via-yellow-400 via-amber-400 to-orange-400",
    },
    Winter: {
      bgImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      palette:
        "bg-gradient-conic from-blue-600 via-purple-600 via-gray-600 via-slate-600 to-blue-600",
    },
  };

  const handleSeeDescription = () => {
    navigate(`/${currentSeason.toLowerCase()}`);
  };

  const handlePreviousSeason = () => {
    const currentIndex = seasons.indexOf(currentSeason);
    const previousIndex =
      currentIndex === 0 ? seasons.length - 1 : currentIndex - 1;
    setCurrentSeason(seasons[previousIndex]);
  };

  const handleNextSeason = () => {
    const currentIndex = seasons.indexOf(currentSeason);
    const nextIndex =
      currentIndex === seasons.length - 1 ? 0 : currentIndex + 1;
    setCurrentSeason(seasons[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroColor />

      {/* Main Content */}
      <main className="flex flex-col items-start gap-[35px] px-[200px] py-[20px] min-h-[2082px]">
        <ColorFilterBox
          currentSeason={currentSeason}
          onPreviousSeason={handlePreviousSeason}
          onNextSeason={handleNextSeason}
          onSeeDescription={handleSeeDescription}
          seasonalBackgrounds={seasonalBackgrounds}
        />

        {/* Divider */}
        <div className="w-full h-[1px] bg-black"></div>

        <InstructionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
