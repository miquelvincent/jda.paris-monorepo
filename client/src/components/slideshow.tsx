import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function slideshow({images}) {
    return (
        <Fade autoplay={true} canSwipe={true} duration={2000} arrows={false} pauseOnHover={false}>
        {images.map((each, index) => (
          <div
            className="slideshow"
            key={index}
            style={{ backgroundImage: `url(${each.url})` }}
          />
        ))}
      </Fade>
    );
}

export default slideshow;