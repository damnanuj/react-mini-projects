import React from "react";
import Loader from "./common/Loader";
import ImageSkeleton from "./ImageSkeleton";

export const ImagesList = ({ images }) => {
  if (!images) {
    return (
      <div className="images-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="images-container">
      {images.map((image) => {
        return (
          <div className="image-card" key={image.id}>
            {/* <img src={image.urls.regular} alt={image.alt_description} /> */}
            <ImageSkeleton
              imgUrl={image.urls.regular}
              alt={image.alt_description}
            />
            <div className="likes">
              <span
                className="material-icons"
                style={{ color: "red", fontSize: "20px" }}
              >
                favorite
              </span>
              <span className="likeCount">{image.likes}</span>
            </div>
            <div className="layer">
              <p className="description">
                {image.description ? (
                  <p className="description">{image.description}</p>
                ) : (
                  <p>{image.alt_description}</p>
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
