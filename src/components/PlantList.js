import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDelete}) {

  return (
    <ul className="cards">{plants.map(plant => {
      return (
        <div key={plant.id} onClick={() => handleDelete(plant)}className="card">
        <img src={plant.image}/>
        <div>{plant.name}</div>
        <div>price: {plant.price}</div>
        </div>
      )
    })}</ul>
  );
}

export default PlantList;
