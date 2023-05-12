import React, { useState } from "react";

function PlantCard({handleDelete, plant}) {
  const [inStock, setOutStock] = useState(true)
  const handleOut = (e) => {
    e.stopPropagation()
    setOutStock(current => !current)
  }
  return (
    <li onClick={() => handleDelete(plant)} className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <div onClick={handleOut}>
      {inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      </div>
    </li>
  );
}

export default PlantCard;
