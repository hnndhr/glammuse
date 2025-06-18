import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { QuoteSection } from "@/components/QuoteSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BeautypediaSection } from "@/components/BeautypediaSections";
import { Footer } from "@/components/Footer";

export default function Index() {
  const handleSignOut = () => {
    console.log("User signed out");
    // Implement sign out logic here
  };

  const handleGetStarted = () => {
    console.log("Get Started clicked");
    // Implement navigation to sign up or login
  };

  const handleTryNow = () => {
    console.log("Try Now clicked - Color Analysis");
    // Implement navigation to color analysis feature
  };

  const handleBlogCardClick = (title: string) => {
    console.log("Blog card clicked:", title);
    // Implement navigation to blog post details
  };

  const handleSocialClick = (platform: string) => {
    console.log("Social media clicked:", platform);
    // Implement social media navigation
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("Footer link clicked:", link);
    // Implement footer link navigation
  };

  return (
    <div className="bg-white pt-5">
      <Header activePage="home" onSignOut={handleSignOut} />

      <main className="w-full pt-5">
        <HeroSection onGetStarted={handleGetStarted} />

        <QuoteSection />

        <FeaturesSection onTryNow={handleTryNow} />

        <BeautypediaSection onBlogCardClick={handleBlogCardClick} />
      </main>

      <Footer
        onSocialClick={handleSocialClick}
        onLinkClick={handleFooterLinkClick}
      />
    </div>
  );
}
