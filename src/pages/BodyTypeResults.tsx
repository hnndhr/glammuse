import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface BodyTypeInfo {
  name: string;
  description: string;
  stylingAdvice: {
    title: string;
    content: string;
    tips: string[];
  };
  clothingCategories: {
    necklines: string;
    shirts: string;
    jackets: string;
    trousers: string;
    skirts: string;
    dresses: string;
  };
}

const bodyTypeData: Record<string, BodyTypeInfo> = {
  hourglass: {
    name: "Hourglass",
    description:
      "You have a classic hourglass figure with balanced bust and hips and a well-defined waist. This is considered the ideal body shape with curves in all the right places. Your measurements show harmonious proportions that create a naturally feminine silhouette.",
    stylingAdvice: {
      title: "How to Style the Hourglass?",
      content:
        "The goal for dressing this shape is to highlight your natural waist and maintain the beautiful balance between your bust and hips.",
      tips: [
        "Highlight your waist - Use belts, fitted tops, and wrap dresses to emphasize your natural waistline",
        "Choose fitted silhouettes - Avoid oversized clothing that hides your curves",
        "Embrace your curves - Select pieces that follow your natural body line without being too tight",
      ],
    },
    clothingCategories: {
      necklines:
        "V-necks, scoop necks, sweetheart necklines, and wrap styles that complement your balanced proportions",
      shirts:
        "Fitted blouses, wrap tops, peplum styles, and anything that cinches at the waist",
      jackets:
        "Tailored blazers, wrap jackets, cropped styles that hit at the waist, and fitted cardigans",
      trousers:
        "High-waisted pants, straight-leg trousers, bootcut styles, and anything that highlights your waist",
      skirts:
        "Pencil skirts, A-line styles, wrap skirts, and any fitted silhouette that shows your curves",
      dresses:
        "Wrap dresses, fit-and-flare styles, bodycon dresses, and anything with a defined waistline",
    },
  },
  "bottom-hourglass": {
    name: "Bottom Hourglass",
    description:
      "You have a bottom hourglass figure with fuller hips than bust, creating a beautiful pear-like hourglass silhouette with a defined waist. Your curves are elegant and feminine, with a lovely waist definition that creates an attractive silhouette.",
    stylingAdvice: {
      title: "How to Style the Bottom Hourglass?",
      content:
        "The goal for dressing this shape is to balance your fuller bottom half while highlighting your defined waist and adding some volume to your upper body.",
      tips: [
        "Add volume to your upper body - Use patterns, textures, and details on tops to balance your proportions",
        "Highlight your waist - Emphasize your natural waistline with fitted tops and belts",
        "Choose the right bottoms - Select styles that flatter your hip area without adding unnecessary bulk",
      ],
    },
    clothingCategories: {
      necklines:
        "Boat necks, off-shoulder styles, scoop necks, and horizontal stripes on top to add width",
      shirts:
        "Peplum tops, ruffled blouses, embellished tops, and light-colored or patterned upper pieces",
      jackets:
        "Structured blazers with shoulder details, cropped jackets, and styles that end at the waist",
      trousers:
        "Straight-leg pants, bootcut styles, dark colors, and high-waisted designs that smooth your silhouette",
      skirts:
        "A-line skirts, straight skirts in darker colors, and styles that skim over your hips",
      dresses:
        "Fit-and-flare dresses, empire waist styles, and dresses with detailed tops and simple bottoms",
    },
  },
  "top-hourglass": {
    name: "Top Hourglass",
    description:
      "You have a top hourglass figure with a fuller bust than hips, creating an inverted pear-like hourglass silhouette with a defined waist. Your upper body is beautifully proportioned with an attractive waistline that creates feminine curves.",
    stylingAdvice: {
      title: "How to Style the Top Hourglass?",
      content:
        "The goal for dressing this shape is to balance your fuller upper body with your narrower hips while maintaining your beautiful waist definition.",
      tips: [
        "Balance your proportions - Add volume to your lower body to match your fuller bust",
        "Support your bust - Choose well-fitted, supportive undergarments and tops",
        "Highlight your waist - Emphasize your natural waistline to maintain your hourglass shape",
      ],
    },
    clothingCategories: {
      necklines:
        "V-necks, wrap styles, and scoop necks that flatter your bust without overwhelming your frame",
      shirts:
        "Fitted tops, wrap blouses, and styles that provide good support and shape",
      jackets:
        "Open-front cardigans, long blazers, and styles that create vertical lines",
      trousers:
        "Wide-leg pants, flared styles, light colors, and textured fabrics to add volume",
      skirts:
        "A-line skirts, pleated styles, full skirts, and lighter colors to balance your proportions",
      dresses:
        "A-line dresses, fit-and-flare styles with fuller skirts, and empire waist designs",
    },
  },
  spoon: {
    name: "Spoon",
    description:
      "You have a spoon body shape with fuller hips and a defined waist. Your upper hips are proportionally wider, creating a distinctive curved silhouette. This shape is similar to the pear but with more defined curves and a more pronounced waist.",
    stylingAdvice: {
      title: "How to Style the Spoon?",
      content:
        "The goal for dressing this shape is to balance your fuller lower body while highlighting your waist and adding visual interest to your upper body.",
      tips: [
        "Emphasize your upper body - Use bright colors, patterns, and details on tops to draw attention upward",
        "Define your waist - Choose fitted tops and use belts to highlight your natural waistline",
        "Choose flattering bottoms - Select styles that smooth over your hip area without clinging",
      ],
    },
    clothingCategories: {
      necklines:
        "Boat necks, off-shoulder styles, wide necklines, and horizontal details to broaden shoulders",
      shirts:
        "Peplum tops, embellished blouses, bright patterns, and textured fabrics on top",
      jackets:
        "Structured blazers, cropped styles, and jackets with shoulder details or embellishments",
      trousers:
        "Straight-leg pants, bootcut styles, darker colors, and fabrics that drape well",
      skirts:
        "A-line skirts, straight styles in darker tones, and designs that skim over curves",
      dresses:
        "Fit-and-flare dresses, empire waist styles, and dresses with interesting necklines or sleeve details",
    },
  },
  triangle: {
    name: "Triangle",
    description:
      "You have a triangle (pear) body shape with hips wider than your bust. Your lower body is your most prominent feature, with a smaller upper body. This creates a naturally feminine silhouette that's elegant and graceful.",
    stylingAdvice: {
      title: "How to Style the Triangle?",
      content:
        "The goal for dressing this shape is to balance your proportions by adding visual weight to your upper body while flattering your lower body.",
      tips: [
        "Add volume to your upper body - Use light colors, patterns, and horizontal stripes on tops",
        "Minimize your lower body - Choose darker colors and simpler designs for bottoms",
        "Create shoulder interest - Select tops with details that broaden your shoulder line",
      ],
    },
    clothingCategories: {
      necklines:
        "Boat necks, off-shoulder styles, wide scoop necks, and embellished necklines",
      shirts:
        "Puffed sleeves, ruffled tops, horizontal stripes, and bright or light-colored tops",
      jackets:
        "Structured blazers with shoulder pads, cropped styles, and jackets with lapel details",
      trousers:
        "Straight-leg pants, dark colors, vertical stripes, and smooth fabrics",
      skirts:
        "A-line skirts, straight styles, darker colors, and minimal detailing",
      dresses:
        "Empire waist dresses, A-line styles, and dresses with detailed tops and simple bottoms",
    },
  },
  "inverted-triangle": {
    name: "Inverted Triangle",
    description:
      "The inverted triangle body shape is characterised by broad shoulders and/or bust that narrow down to the hips. This makes the body appear like an inverted triangle shape. The strong shoulders often lend this body shape an athletic-looking physique.",
    stylingAdvice: {
      title: "How to Styling the Inverted Triangle?",
      content:
        "The goal for dressing this shape is to balance the broader shoulders, chest and back with the narrower lower body to create a balanced silhouette.",
      tips: [
        "Soften the shoulder line - Reduce the wide appearance of your shoulders by playing them down and balancing them out with the narrower hips",
        "Create curves around your hips - Add volume and interest to your hips and bottom to make them look curvier and your shoulders smaller",
      ],
    },
    clothingCategories: {
      necklines:
        "V-necks, scoop necks, soft rounded necklines that don't emphasize shoulder width",
      shirts:
        "Soft draping tops, avoid shoulder details, choose styles that flow away from shoulders",
      jackets:
        "Open-front cardigans, long blazers, avoid structured shoulders or wide lapels",
      trousers:
        "Wide-leg pants, flared styles, light colors, and textured fabrics to add volume",
      skirts:
        "A-line skirts, pleated styles, fuller cuts, and lighter colors to balance proportions",
      dresses:
        "A-line dresses, empire waist styles, and dresses that add volume to the lower body",
    },
  },
  rectangle: {
    name: "Rectangle",
    description:
      "You have a rectangle body shape with similar measurements across bust, waist, and hips. You have a straight, athletic silhouette with minimal waist definition. This body type is often associated with a lean, sporty appearance.",
    stylingAdvice: {
      title: "How to Style the Rectangle?",
      content:
        "The goal for dressing this shape is to create the illusion of curves and define a waistline while maintaining your naturally athletic appearance.",
      tips: [
        "Create a waistline - Use belts, peplum tops, and fitted styles to add definition to your midsection",
        "Add curves - Choose pieces with ruffles, pleats, and other details that create the illusion of curves",
        "Layer strategically - Use layering to add dimension and shape to your silhouette",
      ],
    },
    clothingCategories: {
      necklines:
        "All necklines work well, experiment with different styles to find your favorites",
      shirts:
        "Peplum tops, ruffled blouses, wrap styles, and anything that adds shape to your torso",
      jackets:
        "Belted blazers, cropped styles, peplum jackets, and anything that creates waist definition",
      trousers:
        "Skinny jeans, straight-leg pants, and styles that follow your natural lines",
      skirts:
        "Pencil skirts, pleated styles, mini skirts, and designs that add curves to your silhouette",
      dresses:
        "Sheath dresses, wrap styles, bodycon dresses, and anything that creates shape and definition",
    },
  },
};

export default function BodyTypeResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [bodyType, setBodyType] = useState<string>("");
  const [bodyTypeInfo, setBodyTypeInfo] = useState<BodyTypeInfo | null>(null);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      const normalizedType = type.toLowerCase().replace(/\s+/g, "-");
      setBodyType(type);
      setBodyTypeInfo(bodyTypeData[normalizedType] || null);
    } else {
      navigate("/body-shape");
    }
  }, [searchParams, navigate]);

  const handleSignOut = () => {
    console.log("User signed out");
  };

  const handleSocialClick = (platform: string) => {
    console.log("Social media clicked:", platform);
  };

  const handleFooterLinkClick = (link: string) => {
    console.log("Footer link clicked:", link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRetakeQuiz = () => {
    navigate("/body-shape");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  if (!bodyTypeInfo) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-glam-tertiary font-hanuman text-2xl mb-4">
            Loading your results...
          </h2>
          <button
            onClick={() => navigate("/body-shape")}
            className="px-6 py-3 bg-glam-tertiary text-white rounded-lg hover:bg-glam-darkest transition-colors"
          >
            Back to Calculator
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onSignOut={handleSignOut} />

      {/* Hero Section */}
      <div className="relative w-full h-[250px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Title */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center">
          <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[150%] tracking-[1.28px]">
            {bodyTypeInfo.name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-5 px-6 lg:px-[300px]">
        <div className="max-w-[840px] mx-auto">
          {/* Top Description Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
            <img
              src="https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/5ee765222dbae8159b56877b_Inverted%20Triangle%20Body%20Shape%201-p-500.webp"
              alt="Body type illustration"
              className="w-[273px] h-[407px] object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1">
              <p className="text-black font-manrope text-xl md:text-2xl font-normal leading-[150%] tracking-[0.48px] text-justify">
                {bodyTypeInfo.description}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black mb-8"></div>

          {/* Styling Advice Section */}
          <div className="mb-8">
            <h2 className="text-black font-manrope text-2xl md:text-3xl font-bold leading-[150%] tracking-[0.6px] mb-4">
              {bodyTypeInfo.stylingAdvice.title}
            </h2>
            <p className="text-black font-manrope text-lg md:text-xl font-normal leading-[150%] tracking-[0.4px] text-justify mb-6">
              {bodyTypeInfo.stylingAdvice.content}
            </p>
            <div className="space-y-4">
              {bodyTypeInfo.stylingAdvice.tips.map((tip, index) => {
                const [title, description] = tip.split(" - ");
                return (
                  <div key={index}>
                    <h3 className="text-black font-manrope text-xl md:text-2xl font-bold mb-2">
                      {title}
                    </h3>
                    <p className="text-black font-manrope text-lg md:text-xl font-normal leading-[150%] tracking-[0.4px] text-justify">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black mb-8"></div>

          {/* Clothing Categories Section */}
          <div className="mb-8">
            <h2 className="text-black font-manrope text-2xl md:text-3xl font-bold leading-[150%] tracking-[0.6px] mb-8">
              Which Clothing Matches Best?
            </h2>

            <div className="space-y-12">
              {/* Necklines */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Necklines
                </h3>
                <div className="w-full h-[280px] border-4 border-glam-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                  <p className="text-glam-tertiary font-manrope text-lg text-center px-4">
                    {bodyTypeInfo.clothingCategories.necklines}
                  </p>
                </div>
              </div>

              {/* Shirts */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Shirts
                </h3>
                <div className="w-full h-[280px] border-4 border-glam-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                  <p className="text-glam-tertiary font-manrope text-lg text-center px-4">
                    {bodyTypeInfo.clothingCategories.shirts}
                  </p>
                </div>
              </div>

              {/* Jackets */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Jackets
                </h3>
                <div className="w-full h-[280px] border-4 border-glam-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                  <p className="text-glam-tertiary font-manrope text-lg text-center px-4">
                    {bodyTypeInfo.clothingCategories.jackets}
                  </p>
                </div>
              </div>

              {/* Trousers */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Trousers
                </h3>
                <div className="w-full h-[280px] border-4 border-glam-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                  <p className="text-glam-tertiary font-manrope text-lg text-center px-4">
                    {bodyTypeInfo.clothingCategories.trousers}
                  </p>
                </div>
              </div>

              {/* Skirts */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Skirts
                </h3>
                <div className="w-full h-[280px] border-4 border-glam-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                  <p className="text-glam-tertiary font-manrope text-lg text-center px-4">
                    {bodyTypeInfo.clothingCategories.skirts}
                  </p>
                </div>
              </div>

              {/* Dresses */}
              <div className="space-y-3">
                <h3 className="text-black font-manrope text-xl md:text-2xl font-bold leading-[150%] tracking-[0.48px]">
                  Dresses
                </h3>
                <div className="w-full h-[280px] border-4 border-glam-tertiary/70 rounded-lg bg-gray-50 flex items-center justify-center">
                  <p className="text-glam-tertiary font-manrope text-lg text-center px-4">
                    {bodyTypeInfo.clothingCategories.dresses}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button
              onClick={handleRetakeQuiz}
              className="px-8 py-3 bg-glam-tertiary text-white font-manrope text-lg font-normal rounded-lg shadow-md transition-all duration-300 hover:bg-glam-darkest hover:scale-105 focus:outline-none focus:ring-2 focus:ring-glam-cream focus:ring-opacity-50"
            >
              Retake Calculator
            </button>
            <button
              onClick={handleBackToHome}
              className="px-8 py-3 bg-white text-glam-tertiary border-2 border-glam-tertiary font-manrope text-lg font-normal rounded-lg shadow-md transition-all duration-300 hover:bg-glam-cream hover:scale-105 focus:outline-none focus:ring-2 focus:ring-glam-tertiary focus:ring-opacity-50"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
