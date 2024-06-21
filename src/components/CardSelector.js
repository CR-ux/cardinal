import React from 'react';

const CardSelector = ({ cards }) => {
    console.log(cards)

  return (
    <div>
      <h2>Select Your Cards</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.name}>
            <h3>{card.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSelector;
