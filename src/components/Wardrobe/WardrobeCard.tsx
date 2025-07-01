interface WardrobeCardProps {
  type: "add" | "outfit";
  images?: {
    top?: string;
    bottom?: string;
    shoes?: string;
  };
  onClick?: () => void;
}

const WardrobeCard = ({ type, images, onClick }: WardrobeCardProps) => {
  if (type === "add") {
    return (
      <div
        className="w-full h-[795px] border-2 border-glammuse-dark shadow-[3px_3px_4px_0px_rgba(0,0,0,0.50)] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors bg-white relative"
        onClick={onClick}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-glammuse-dark flex items-center justify-center rounded-lg">
            <svg
              width="160"
              height="160"
              viewBox="0 0 256 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M107.868 148.134H0.0996094V108.87H107.868V0.683105H147.133V108.87H255.319V148.134H147.133V255.903H107.868V148.134Z"
                fill="#4A3B30"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full h-[795px] border-2 border-glammuse-dark shadow-[3px_3px_4px_0px_rgba(0,0,0,0.50)] cursor-pointer hover:shadow-lg transition-shadow bg-white relative overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Top clothing */}
        {images?.top && (
          <div
            className="flex items-center justify-center"
            style={{ height: "320px" }}
          >
            <img
              src={images.top}
              alt="Top"
              className="max-w-[227px] max-h-[284px] object-contain"
            />
          </div>
        )}

        {/* Bottom clothing */}
        {images?.bottom && (
          <div
            className="flex items-center justify-center"
            style={{ height: "320px" }}
          >
            <img
              src={images.bottom}
              alt="Bottom"
              className="max-w-[284px] max-h-[284px] object-contain"
            />
          </div>
        )}

        {/* Shoes */}
        {images?.shoes && (
          <div className="flex items-center justify-center flex-1">
            <img
              src={images.shoes}
              alt="Shoes"
              className="max-w-[198px] max-h-[132px] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WardrobeCard;
