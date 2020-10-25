import React, { useState, useEffect } from "react";
import Axios from "axios";
import ImageCard from "./ImageBox";
import ImageSearch from "./ImageSearch";
import "../assets/css/font-awesome.min.css";
import "./style.css";
const API_KEY = "17925693-c924acaf6b6f38b6d7fc56edd8989";

const PhotoGallary = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const URI = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`;
    setIsLoading(true);
    Axios(URI)
      .then((res) => res.data)
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error("error: ", err));
  }, [term]);

  return (
    <div className="main-container">
      <div className="m-1">
        <ImageSearch searchText={(text) => setTerm(text)} />
      </div>
      {!isLoading && images.length === 0 && (
        <div className="m-1">
          <h1 className="">{`No images found`}</h1>
        </div>
      )}

      <div className="m-1">
        {isLoading ? (
          <h1 className="" style={{ fontSize: "10rem" }}>
            <i className="fa fa-spinner fa-pulse"></i>
          </h1>
        ) : (
          <div className="image-card">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoGallary;
