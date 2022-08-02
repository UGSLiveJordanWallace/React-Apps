import React from 'react'
import { ImArrowDownLeft } from "react-icons/im"

export default function Monument() {
    return (
        <div className="monument-main-div">
          <h1>The Rooted Wolf and His Children</h1>
          <div className="monument-body-div">
            <img src=""/>
            <img className="monument-body-image" src="/images/APUSH-Monument.png"/>
            <p>The Rooted Wolf and His Children is a monument designed to illustrate the Mohegan tribe and their sacred little people. 
              The Mohegan people are a very interesting tribe in America. 
              They are the wolf tribe, modeling themselves as a nation that learns from their past. 
              They are a nation that learns from their past to teach their off spring the wisdom of time. 
              They survive as one people, a single spirit on the Trail of Life. 
              Guided by the thirteen Generations before them, and responsible for the success of thirteen more. 
              I decided to make a massive wolf with dark short figures around it. 
              The Wolf represents the Mohegan people, the kinship who stands proud as one body. 
              Each stroke of hair represents every person in the tribe, with the head of the wolf being the chief. 
              The wolf is facing these dark, small figures on the bottom center of the monuement. 
              They represent the fabled Makiawisug "Little People", these ghost like extraterrestrials were well respected by the Mohegan people. 
              They filled baskets of food for the Makiawisug, and in return, received knownledge on agriculture and medicinal treatements. 
              Yet, if you stared fo too long, you would be rooted to the growned. 
              This is why the feet of the Wolf are not shown, because the wolf is starring at these dark figures, he is rooted to the growned. 
              Just like how the Mohegans are rooted to their tribal tradition and values. 
              </p>
          </div> 
          <div className="monument-location-div">
            <img src="https://www.ctvisit.com/sites/default/files/bridgeport.jpg" />
            <ImArrowDownLeft className="monument-location-arrow" />
            <p>Location is a very important part of this monument. 
              The reason why this monument is placed in Bridgeport Connecticut is because, just like the English did, sailors will see the Mohegan presence on the port as they dock on the harbor.
              This is to remind everyone who the original faces of Bridgeport were.
            </p>
          </div>
        </div>
    )
}
