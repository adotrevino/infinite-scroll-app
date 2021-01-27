import React from "react"
import './BottomMessage.css';

function BottomMessage() {
  return (
    <div className="columns bottom-section">
      <div className="column"><h4 className="title">THE END</h4></div>
      
      <div className="column"><img className="bottom-image" src={process.env.PUBLIC_URL + '/doge.jpg'} alt=""/></div>
      
    </div>
  )
}

export default BottomMessage