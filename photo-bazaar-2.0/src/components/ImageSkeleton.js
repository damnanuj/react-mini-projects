import { useEffect, useState } from "react";
import "../styles/skeleton.scss";

const ImageSkeleton = ({ imgUrl ,alt}) => {
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    //fetching the image
    const image = new Image();
    image.src = imgUrl;

    image.onload = function () {
      setStatus("loaded");
    };
    image.onerror = function () {
      setStatus("failed");
    };
  });

  if (status === "pending") {
    return (
      <div className="image_skeleton">
        {/* <div className="skeleton_content">
          <div className="likes_skeleton"></div>
          <div className="count_skeleton"></div>
        </div> */}
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="images-container">
        <p>Failed Image Loading</p>
      </div>
    );
  }

  return <img src={imgUrl} alt={alt} />;
};

export default ImageSkeleton;
