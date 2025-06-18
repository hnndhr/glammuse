import React from 'react';

interface FooterProps {
  onSocialClick?: (platform: string) => void;
  onLinkClick?: (link: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSocialClick, onLinkClick }) => {
  const handleSocialClick = (platform: string) => {
    if (onSocialClick) {
      onSocialClick(platform);
    } else {
      console.log(`${platform} clicked`);
    }
  };

  const handleLinkClick = (link: string) => {
    if (onLinkClick) {
      onLinkClick(link);
    } else {
      console.log(`${link} clicked`);
    }
  };

  return (
    <>
      <footer className="bg-[rgba(74,59,48,1)] flex w-full items-start gap-5 overflow-hidden flex-wrap justify-between mt-[91px] pl-[31px] pt-[41px] pb-[119px] max-md:max-w-full max-md:mt-10 max-md:pl-5 max-md:pb-[100px]" role="contentinfo">
        <div className="flex flex-col">
          <div className="self-stretch gap-2.5 text-[40px] text-white font-normal whitespace-nowrap text-center uppercase tracking-[2.2px] leading-[1.2]">
            Glammuse
          </div>
          <div className="text-white text-xl font-normal leading-[25px] mt-[22px]">
            Beauty Smarter,
            <br />
            Style Better
          </div>
          <div className="flex items-center gap-[22px] mt-[67px] max-md:mt-10" role="list" aria-label="Social media links">
            <button
              onClick={() => handleSocialClick('instagram')}
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Instagram"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae96bc77cd99dfb4169f955e8c6b3c3c4be3e6e9?placeholderIfAbsent=true"
                alt="Instagram"
                className="aspect-[1] object-contain w-[35px] self-stretch shrink-0 my-auto"
              />
            </button>
            <button
              onClick={() => handleSocialClick('facebook')}
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow us on Facebook"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5fdf459fa85a5e0e3e069f95ac3f092392dcba1?placeholderIfAbsent=true"
                alt="Facebook"
                className="aspect-[0.86] object-contain w-[30px] self-stretch shrink-0 my-auto"
              />
            </button>
          </div>
        </div>
        
        <nav className="flex gap-[40px_100px] flex-wrap mt-[72px] px-5 max-md:max-w-full max-md:mt-10" aria-label="Footer navigation">
          <div className="grow shrink w-[108px]">
            <h3 className="text-[rgba(217,183,154,1)] text-xl font-semibold mb-[26px]">Features</h3>
            <ul className="text-white text-base font-normal leading-[30px] space-y-2" role="list">
              <li>
                <button
                  onClick={() => handleLinkClick('skin-analysis')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Skin Type Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('color-analysis')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Color Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('body-analysis')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Body Type Analysis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('wardrobe')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Personal Wardrobe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('beautypedia')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Beautypedia
                </button>
              </li>
            </ul>
          </div>
          
          <div className="grow shrink w-[108px]">
            <h3 className="text-[rgba(217,183,154,1)] text-xl font-semibold mb-[26px]">Utility Pages</h3>
            <ul className="text-white text-base font-normal leading-[30px] space-y-2" role="list">
              <li>
                <button
                  onClick={() => handleLinkClick('privacy')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('terms')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('faq')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  FAQ's
                </button>
              </li>
            </ul>
          </div>
          
          <div className="grow shrink w-[108px]">
            <h3 className="text-[rgba(217,183,154,1)] text-xl font-semibold mb-[26px]">Contact Us</h3>
            <ul className="text-white text-base font-normal leading-[30px] space-y-2" role="list">
              <li>
                <button
                  onClick={() => handleLinkClick('whatsapp')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('email')}
                  className="hover:text-[rgba(217,183,154,1)] transition-colors text-left"
                >
                  Email
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
      
      <div className="bg-white w-full overflow-hidden text-lg text-black font-normal text-center tracking-[-0.18px] leading-9 pt-5 pb-3 px-[70px] max-md:max-w-full max-md:px-5">
        <span style={{ color: 'rgba(0,0,0,1)' }}>Copyright </span>2025, Glammuse | All rights reserved.
      </div>
    </>
  );
};
