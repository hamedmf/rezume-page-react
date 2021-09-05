import React from "react";

export default function Photo({src,alt}) {
    return(
        <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="photo">
                <img src={src} alt={alt} />
              </div>
            </div>
    )
}