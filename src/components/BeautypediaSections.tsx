import { useState } from "react";
import BlogCard from "./BlogCards";

interface BlogPost {
  title: string;
  category: string;
  author: string;
  date: string;
  description: string;
}

interface BeautypediaSectionProps {
  onBlogCardClick: (title: string) => void;
}

export const BeautypediaSection = ({
  onBlogCardClick,
}: BeautypediaSectionProps) => {
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const blogPosts: BlogPost[] = [
    {
      title: "How to get clear skin fast",
      category: "Skincare",
      author: "Dr. Wade Warren",
      date: "Jan 20, 2021",
      description:
        "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person's skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
    },
    {
      title: "What's The Best Skincare Routine?",
      category: "Skincare",
      author: "Angela Haupt",
      date: "Jul 30, 2024",
      description:
        "Walking down the skin-care aisle is like sensory overload. There are gels, creams, so-called essences, and serums, so many serums. The products claim to revitalize, exfoliate, hydrate, brighten, soothe, correct—or work anti-aging wonders. What's a skin-care novice to choose?",
    },
    {
      title: "Color Theory in Fashion",
      category: "Fashion",
      author: "Sarah Johnson",
      date: "Aug 15, 2024",
      description:
        "Understanding color theory can transform your wardrobe choices. Learn how to pick colors that complement your skin tone and enhance your natural beauty.",
    },
  ];

  const nextBlog = () => {
    setCurrentBlogIndex(
      (prev) => (prev + 1) % Math.max(1, blogPosts.length - 2),
    );
  };

  const prevBlog = () => {
    setCurrentBlogIndex(
      (prev) =>
        (prev - 1 + Math.max(1, blogPosts.length - 2)) %
        Math.max(1, blogPosts.length - 2),
    );
  };

  return (
    <div className="bg-glam-peach py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-white text-6xl lg:text-9xl xl:text-[180px] font-normal leading-[150%] mb-6">
            BEAUTYPEDIA
          </h2>
          <p className="font-port-lligat text-glam-darkest text-3xl lg:text-4xl">
            Updated beauty wisdom at your fingertips!
          </p>
        </div>

        {/* Blog Cards Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevBlog}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 hover:scale-110 transition-all duration-200 opacity-20 hover:opacity-50"
          >
            <svg
              className="w-16 h-24 text-glam-tertiary"
              viewBox="0 0 75 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5695 61.0001L74.5 14.0695L61.0916 0.661133L0.752686 61.0001L61.0916 121.339L74.5 107.931L27.5695 61.0001Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <button
            onClick={nextBlog}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 hover:scale-110 transition-all duration-200 opacity-20 hover:opacity-50"
          >
            <svg
              className="w-16 h-24 text-glam-tertiary"
              viewBox="0 0 75 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.4305 61.0001L0.5 14.0695L13.9084 0.661133L74.2473 61.0001L13.9084 121.339L0.5 107.931L47.4305 61.0001Z"
                fill="currentColor"
              />
            </svg>
          </button>

          {/* Blog Cards */}
          <div className="flex justify-center gap-6 lg:gap-8 px-16">
            {blogPosts
              .slice(currentBlogIndex, currentBlogIndex + 3)
              .map((post, index) => (
                <div key={index} className="flex-shrink-0 w-full max-w-sm">
                  <BlogCard
                    {...post}
                    onClick={() => onBlogCardClick(post.title)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Spa Icon */}
      <div className="flex justify-center mt-16">
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
          <svg
            className="w-24 h-24 text-glam-medium"
            viewBox="0 0 109 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.5 108.25C47.9604 107.444 41.4656 105.675 35.0156 102.942C28.5656 100.21 22.8099 96.2909 17.7484 91.1846C12.687 86.0784 8.58854 79.6284 5.45312 71.8346C2.31771 64.0409 0.75 54.6794 0.75 43.7502V38.3752H6.125C10.6938 38.3752 15.3969 38.9575 20.2344 40.1221C25.0719 41.2867 29.5958 43.0336 33.8063 45.3627C34.8813 37.6586 37.3224 29.7528 41.1297 21.6456C44.937 13.5383 49.3938 6.57316 54.5 0.750244C59.6062 6.57316 64.063 13.5383 67.8703 21.6456C71.6776 29.7528 74.1188 37.6586 75.1938 45.3627C79.4042 43.0336 83.9281 41.2867 88.7656 40.1221C93.6031 38.9575 98.3062 38.3752 102.875 38.3752H108.25V43.7502C108.25 54.6794 106.682 64.0409 103.547 71.8346C100.411 79.6284 96.313 86.0784 91.2516 91.1846C86.1901 96.2909 80.4568 100.21 74.0516 102.942C67.6464 105.675 61.1292 107.444 54.5 108.25ZM54.2312 97.2315C53.2458 82.3607 48.8339 71.118 40.9953 63.5034C33.1568 55.8888 23.4146 51.1857 11.7687 49.394C12.7542 64.7127 17.3005 76.1346 25.4078 83.6596C33.5151 91.1846 43.1229 95.7086 54.2312 97.2315ZM54.5 63.1002C55.8438 61.1294 57.4786 59.0914 59.4047 56.9862C61.3307 54.881 63.1896 53.0669 64.9812 51.544C64.8021 46.4377 63.7943 41.1075 61.9578 35.5534C60.1214 29.9992 57.6354 24.5794 54.5 19.294C51.3646 24.5794 48.8786 29.9992 47.0422 35.5534C45.2057 41.1075 44.1979 46.4377 44.0188 51.544C45.8104 53.0669 47.6917 54.881 49.6625 56.9862C51.6333 59.0914 53.2458 61.1294 54.5 63.1002ZM64.9812 94.8127C68.2958 93.7377 71.7448 92.17 75.3281 90.1096C78.9115 88.0492 82.2484 85.2497 85.3391 81.7112C88.4297 78.1726 91.0724 73.7607 93.2672 68.4752C95.462 63.1898 96.7833 56.8294 97.2313 49.394C88.8104 50.6482 81.4198 53.4476 75.0594 57.7924C68.699 62.1372 63.8167 67.669 60.4125 74.3877C61.4875 77.2544 62.4057 80.3898 63.1672 83.794C63.9286 87.1982 64.5333 90.8711 64.9812 94.8127Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
