import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import WardrobeCard from "@/components/Wardrobe/WardrobeCard";

const Index = () => {
  const outfits = [
    {
      id: 1,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/c933d244993fd7e2081c6cd46230d95dbc157f17?width=454",
        bottom:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/54b68d88160433d660ec01d574fb4dfbcf1188ba?width=568",
        shoes:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/5f14062a766d0e78af48603aaf764266a3b39d6b?width=396",
      },
    },
    {
      id: 2,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf44a5e84782d2edf358ab8cfd52f51221042cee?width=288",
        shoes:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/ddf5d0f9741b5291ac06309e1977f237feada65f?width=300",
      },
    },
    {
      id: 3,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/669c88369c3bececb24fe69da5b0adfc22b07d69?width=378",
        bottom:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d145a83e9a8fe252058c45c84ebc8d4e419baa3e?width=305",
        shoes:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/d283c3aa5f491cf04370077b956d0f1af53d731f?width=345",
      },
    },
    {
      id: 4,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/933cf5254a857576223c5c2c36f77fbf1df28034?width=470",
        bottom:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/8380d014af3b7eed82cd46db6faafbfcd1cf8084?width=468",
        shoes:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/f4ade316f68e5c5c459108b776f4fd5c0704962f?width=446",
      },
    },
    {
      id: 5,
      images: {
        top: "https://cdn.builder.io/api/v1/image/assets/TEMP/36b432204e703139fb04e1c728f245fdf50c35f5?width=460",
        bottom:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/49e3779a3a25b0cb68dbddba7c8863cd7eeae8a7?width=316",
        shoes:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/8498aec03a9e43e9307154680d87c2640a01ad4f?width=414",
      },
    },
  ];

  const handleAddOutfit = () => {
    console.log("Add new outfit");
  };

  const handleOutfitClick = (outfitId: number) => {
    console.log("Outfit clicked:", outfitId);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[250px] bg-gray-900">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/959fcb73a73144cfb0d19ae1f103975d1f5637dd?width=2880"
          alt="Wardrobe Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-playfair text-4xl md:text-5xl lg:text-6xl font-normal leading-[150%] tracking-[1.28px] text-center">
            Wardrobe
          </h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="flex-1 px-4 sm:px-8 md:px-16 lg:px-[200px] py-5">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 p-5"
          style={{
            boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            minHeight: "1680px",
          }}
        >
          {/* Add Button Card - Always first */}
          <div className="w-full">
            <WardrobeCard type="add" onClick={handleAddOutfit} />
          </div>

          {/* Outfit Cards */}
          {outfits.map((outfit) => (
            <div key={outfit.id} className="w-full">
              <WardrobeCard
                type="outfit"
                images={outfit.images}
                onClick={() => handleOutfitClick(outfit.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;