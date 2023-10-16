import React from "react";
import Image from "next/image";

interface RightBoxProps {
  imageUrl: string;
}

const RightBox: React.FC<RightBoxProps> = ({ imageUrl }) => {
  return (
    <div className="image-box flex-1 m-4">
      <div className="image-container relative h-[36rem]">
        <Image
          className="image object-cover rounded"
          src={imageUrl}
          alt="right-image"
          fill={true}
        />
      </div>
      <style jsx>{`
        @media (max-width: 800px) {
          .image-box {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default RightBox;
