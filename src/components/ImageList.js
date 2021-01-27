import React, { useEffect } from "react"
import Card from './Card';

function ImageList({dogs}) {
    function renderDogs(index) {
        let dogRow = [dogs[index - 1], dogs[index]];
        return (
          <div className="columns" key={index}>
            {dogRow.map(dog => {
              return (
                <Card dog={dog} />
              );
            })}
          </div>
        );
      }
    return (
        <>
        {dogs.map((dog, i) => {
           return i % 2 ? renderDogs(i) : '';
        })}
        </>
    )
}

export default ImageList