import React from 'react';
// stars rating in cards
const Stars = ({ rating,handleStars }) => {
  function getStars(count) {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= count) {
        stars.push(<span onClick={()=>handleStars(i)} key={i}>★</span>);
      } else {
        stars.push(<span onClick={()=>handleStars(i)} key={i}>☆</span>);
      }
    }
    return stars;
  }

  return (
    <div>
      <h1>{getStars(rating)}</h1>
    </div>
  );
};


Stars.defaultProps = {
  handleStars: ()=> {}
}

export default Stars;
