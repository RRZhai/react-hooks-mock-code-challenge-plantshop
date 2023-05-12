import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDelete}) {

  return (
    <ul className="cards">{plants.map(plant => <PlantCard plant={plant} handleDelete={handleDelete}/>)}</ul>
  );
}

export default PlantList;
