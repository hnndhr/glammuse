interface FeaturesSectionProps {
  onTryNow: () => void;
}

export const FeaturesSection = ({ onTryNow }: FeaturesSectionProps) => {
  return (
    <div className="bg-glam-tan py-16 lg:py-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#241910] via-[#20160F] to-[#17100C] py-12 lg:py-16 mb-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-center gap-5">
            {/* Star Icon */}
            <svg
              className="w-16 h-12 lg:w-20 lg:h-16 text-white"
              viewBox="0 0 81 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M75.375 56.5314L64.125 46.5183L69.375 41.8455L80.625 51.8586L75.375 56.5314ZM61.875 16.479L56.625 11.8063L67.875 1.79318L73.125 6.46595L61.875 16.479ZM19.125 16.479L7.875 6.46595L13.125 1.79318L24.375 11.8063L19.125 16.479ZM5.625 56.5314L0.375 51.8586L11.625 41.8455L16.875 46.5183L5.625 56.5314ZM28.6875 50.2732L40.5 43.9316L52.3125 50.3567L49.2188 38.341L59.625 30.3305L45.9375 29.2457L40.5 17.8976L35.0625 29.1623L21.375 30.247L31.7812 38.341L28.6875 50.2732ZM17.3438 64.2081L23.4375 40.7608L3 24.9902L30 22.9041L40.5 0.79187L51 22.9041L78 24.9902L57.5625 40.7608L63.6562 64.2081L40.5 51.7752L17.3438 64.2081Z"
                fill="currentColor"
              />
            </svg>
            <h2 className="font-playfair text-white text-5xl lg:text-7xl font-black leading-[150%]">
              Our Features
            </h2>
          </div>
        </div>
      </div>

      {/* Feature Content */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="relative">
          {/* Main Feature Card */}
          <div className="bg-gradient-to-r from-[#311D12] to-[#8E6751] rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-port-lligat text-white text-3xl lg:text-5xl tracking-[2.75px] uppercase mb-4">
                COLOR ANALYSIS
              </h3>
              <p className="font-inter text-white text-lg lg:text-xl mb-8 shadow-lg">
                Discover the shades that make you pop!
              </p>
              <button
                onClick={onTryNow}
                className="inline-flex items-center justify-center px-9 py-3.5 border border-white bg-transparent rounded-full font-hanuman font-bold text-2xl text-white transition-all duration-200 hover:bg-white hover:text-glam-tertiary focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Try Now
              </button>
            </div>
            <div className="flex-1 max-w-sm lg:max-w-md">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Color analysis demonstration"
                className="w-full h-auto rounded-2xl shadow-2xl aspect-[387/581] object-cover"
              />
            </div>
          </div>

          {/* Navigation Arrow */}
          <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2">
            <button className="p-2 hover:scale-110 transition-transform duration-200 opacity-50 hover:opacity-75">
              <svg
                className="w-8 h-12 text-glam-tertiary"
                viewBox="0 0 41 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.0911 33.5457L0 7.45455L7.45443 0.00012207L41 33.5457L7.45443 67.0913L0 59.6368L26.0911 33.5457Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Spa Icon Footer */}
      <div className="flex justify-center mt-16">
        <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
          <svg
            className="w-24 h-24 text-glam-peach"
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
