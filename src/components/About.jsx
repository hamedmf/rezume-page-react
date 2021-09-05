import React from "react";

const aboutText = 
"Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consecteturadipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies."
const titleA = "About"

const titleB = 'Hamed'

export default function About() {
    return(
    
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="about-me">
                <div className="block-title">
                  <h3>{titleA} <span>{titleB}</span></h3>
                </div>
                <p>
                  {aboutText}
                </p>
              </div>
            </div>
    )
}