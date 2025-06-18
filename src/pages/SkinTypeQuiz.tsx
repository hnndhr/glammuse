import React, { useState } from "react";
import { Header } from "@/components/Header";
import { useNavigate } from "react-router-dom";

interface SkinTypeOption {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  skinType: string;
}

export default function SkinTypeQuiz() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const skinTypeOptions: SkinTypeOption[] = [
    {
      id: "normal",
      title: "Normal Skin",
      description:
        "Kulit terasa lembut, halus, tidak mengelupas, dan tidak terlalu berminyak",
      imageUrl:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
      skinType: "Normal",
    },
    {
      id: "dry",
      title: "Dry Skin",
      description: "Kulit terasa kering, tertarik, terlihat kering, dan kusam",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664300271874-a948f09c09ae?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skinType: "Dry",
    },
    {
      id: "oily",
      title: "Oily Skin",
      description: "Kulit terasa berminyak, licin, dan terlihat mengkilap",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1664391616054-1671f1b7f75d?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skinType: "Oily",
    },
    {
      id: "combination",
      title: "Combination Skin",
      description: "Hanya mengkilap di T-Zone dan kering di area wajah lainnya",
      imageUrl:
        "https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skinType: "Combination",
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    // Add a small delay for visual feedback, then navigate to results
    setTimeout(() => {
      console.log(`Selected skin type: ${optionId}`);
      // Navigate to results page or next step
      // navigate('/skin-type-results');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white pt-5">
      <Header activePage="features" onSignOut={handleSignOut} />

        <main className="w-full pt-5">
        {/* Hero Section */}
        <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                "url('https://images.unsplash.com/photo-1630359694494-0d16c120fcea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Title */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center">
            <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-medium leading-[150%] tracking-[1.28px]">
                Skin Type Test
            </h1>
            </div>
        </div>

        {/* Quiz Section */}
        <div className="py-12 lg:py-16 px-6 lg:px-16">
            <div className="max-w-6xl mx-auto">
            {/* Question */}
            <div className="text-center mb-12">
                <h2 className="text-black font-lora text-3xl md:text-4xl lg:text-5xl font-semibold leading-[120%] tracking-[0.8px] max-w-4xl mx-auto">
                Sentuh kulit muka kita yuk!
                <br />
                What do you feel?
                </h2>
            </div>

            {/* Choices Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skinTypeOptions.map((option) => (
                <button
                    key={option.id}
                    onClick={() => handleOptionSelect(option.id)}
                    className={`group relative w-full h-[350px] bg-white rounded-[20px] border border-[#4A3B30] border-opacity-70 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#744B28] focus:ring-opacity-50 ${
                    selectedOption === option.id
                        ? "ring-2 ring-[#744B28] bg-[#FBF5F0]"
                        : ""
                    }`}
                >
                    {/* Image Container */}
                    <div className="relative w-full h-[180px] overflow-hidden rounded-t-[20px] p-4">
                    <img
                        src={option.imageUrl}
                        alt={option.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    </div>

                    {/* Divider */}
                    <div className="w-[250px] h-px bg-black bg-opacity-30 mx-auto mb-4" />

                    {/* Description */}
                    <div className="px-6 pb-6">
                    <p className="text-[#4A3B30] font-manrope text-lg leading-[150%] text-left">
                        {option.description}
                    </p>
                    </div>

                    {/* Selection Indicator */}
                    {selectedOption === option.id && (
                    <div className="absolute top-4 right-4 w-6 h-6 bg-[#744B28] rounded-full flex items-center justify-center">
                        <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                        </svg>
                    </div>
                    )}
                </button>
                ))}
            </div>

            {/* Continue Button */}
            {selectedOption && (
                <div className="text-center mt-12">
                <button
                    onClick={() => {
                    console.log("Continuing with skin type analysis...");
                    // Navigate to next step or results
                    }}
                    className="inline-flex items-center justify-center px-12 py-4 bg-[#744B28] text-white font-hanuman text-2xl font-bold rounded-full transition-all duration-300 hover:bg-[#623B1C] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FFE3CB] focus:ring-opacity-50"
                >
                    Continue Analysis
                </button>
                </div>
            )}
            </div>
        </div>
        </main>
    </div>
  );
}
