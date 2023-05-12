import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

// #

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(plantList => setPlants(plantList))
  }, [])

  const handleSearch = (type) => {
    setSearch(type)
  }

  const handleSubmit = (newPlant) => {
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'},
      body: JSON.stringify(newPlant)
    }).then(resp => resp.json())
    .then(data => setPlants(data))
  }

  const handleDelete = (deletePlant) => {
    fetch(`http://localhost:6001/plants/${deletePlant.id}`, {
      method: 'DELETE'
    })
    setPlants(plants => plants.filter(plant => plant.id !== deletePlant.id))
  }

  const filtered = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filtered} handleDelete={handleDelete}/>
    </main>
  );
}

export default PlantPage;
