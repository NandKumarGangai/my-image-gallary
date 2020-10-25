import React from "react";
import "./style.css";

const Modal = ({ toggleModal, imageDesc = {} }) => {
  const { webformatURL, user, views, downloads, likes, tags } = imageDesc;
  return (
    <div className="popup-container">
      <div className="popup">
        <div>
          <button id="close" onClick={() => toggleModal(false)}>
            &times;
          </button>
          <h1 className="user">{`Image by ${user}`}</h1>
        </div>
        <div className="content">
          <div>
            <img src={webformatURL} className="popup-image" alt="" />
          </div>
          <div>
            <ul className="popup-stats">
              <li>
                <strong>Views: </strong>
                {views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {downloads}
              </li>
              <li>
                <strong>Likes: </strong>
                {likes}
              </li>
            </ul>
          </div>
          <div>
            <div className='categories'>
              <h4 className="">Categories:</h4>
            </div>
            <div className="popup-tags">
              {tags.split(" ").map((tag, i) => (
                <span key={i} className="popup-tag">
                  {tag.replace(',', '')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
