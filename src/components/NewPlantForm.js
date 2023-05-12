import React, { useState } from "react"
function NewPlantForm({handleSubmit}) {
  const initialForm = {
    name: "",
    image: "",
    price: ""
  }
  const [addPlant, setAddPlant] = useState(initialForm)

  const handleAdd = (e) => {
    setAddPlant({...addPlant, [e.target.name]:e.target.value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={() => handleSubmit(addPlant)}>
        <input onChange={handleAdd} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleAdd} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleAdd} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
