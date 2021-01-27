import React, { useEffect } from "react"

function Card({dog}) {
  return (
    <div className="column is-6 dog-card" >
     <div className="card">
        <figure className="image is-4by3">
          <img className="card-image" src={dog.image.url} />
        </figure>
        <div className="media-content has-background-light">
        <p className="title is-4 pt-4 pb-4 ">{dog.name}</p>
        </div>
     </div>
   
    </div>
  )
}

export default Card