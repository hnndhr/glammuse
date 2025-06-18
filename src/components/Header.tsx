import React from 'react';

interface HeaderProps {
  onSignOut?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSignOut }) => {
  const handleSignOut = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      // Default sign out behavior
      console.log('Sign out clicked');
    }
  };

  return (
    <header className="flex w-full flex-col pl-[35px] max-md:max-w-full max-md:pl-5">
      <div className="self-stretch flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="gap-2.5 text-[35px] text-[rgba(116,75,40,1)] font-normal whitespace-nowrap text-center uppercase tracking-[1.93px] leading-[1.2] mt-[5px]">
          Glammuse
        </div>
        <nav className="flex items-center gap-[33px] text-base flex-wrap px-[30px] max-md:max-w-full max-md:px-5" role="navigation" aria-label="Main navigation">
          <div className="self-stretch flex min-w-60 items-center gap-10 text-[#141414] font-medium flex-wrap my-auto max-md:max-w-full">
            <a href="#home" className="text-[#141414] self-stretch my-auto hover:text-[rgba(116,75,40,1)] transition-colors">
              Home
            </a>
            <a href="#features" className="text-[#141414] self-stretch my-auto hover:text-[rgba(116,75,40,1)] transition-colors">
              Features
            </a>
            <a href="#beautypedia" className="text-[#141414] font-normal self-stretch my-auto hover:text-[rgba(116,75,40,1)] transition-colors">
              Beautypedia
            </a>
            <a href="#wardrobe" className="text-[#141414] self-stretch my-auto hover:text-[rgba(116,75,40,1)] transition-colors">
              Wardrobe
            </a>
            <a href="#about" className="text-[#141414] self-stretch my-auto hover:text-[rgba(116,75,40,1)] transition-colors">
              About Us
            </a>
            <a href="#profile" className="text-[#141414] font-extrabold self-stretch my-auto hover:text-[rgba(116,75,40,1)] transition-colors">
              Profile
            </a>
          </div>
          <button
            onClick={handleSignOut}
            className="text-white self-stretch bg-[rgba(116,75,40,1)] gap-2.5 font-normal text-center my-auto px-6 py-3.5 rounded-[5px] hover:bg-[rgba(116,75,40,0.9)] transition-colors max-md:px-5"
            aria-label="Sign out of account"
          >
            Sign Out
          </button>
        </nav>
      </div>
    </header>
  );
};
