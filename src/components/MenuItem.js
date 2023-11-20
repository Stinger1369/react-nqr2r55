import React, { useState } from 'react';

function MenuItem({ itemName, description, foodImage, price, isFavorite }) {
    const [favorite, setFavorite] = useState(isFavorite);

    const handleClickFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <div>
            <h2>{itemName}</h2>
            <img src={foodImage} alt={itemName} />
            <p>{description}</p>
            <p>Price: ${price}</p>
            <div id="favorite" className={favorite ? "isFavorite" : "notFavorite"} onClick={handleClickFavorite}>
                {favorite ? "♥" : "♡"}
            </div>
        </div>
    );
}

export default MenuItem;

