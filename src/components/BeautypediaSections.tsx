import { useState } from "react";
import BlogCard from "./BlogCards";

interface BlogPost {
  title: string;
  category: string;
  author: string;
  date: string;
  description: string;
  imageUrl?: string;
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
      imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
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
    <div className="bg-peach py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-medium text-6xl lg:text-9xl xl:text-[180px] font-normal leading-[150%] mb-6">
            BEAUTYPEDIA
          </h2>
          <p className="font-port-lligat text-glam-darkest text-3xl lg:text-4xl">
            Updated beauty wisdom at your fingertips!
          </p>
        </div>

        {/* Blog Cards Carousel */}
        <div className="relative">

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
    </div>
  );
};
