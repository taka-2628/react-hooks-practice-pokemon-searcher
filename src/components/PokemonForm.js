import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { onAddPokemon } ) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    frontUrl: "",
    backUrl: ""
  })

  function handleChange(event){
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    
    const newPokemonObj = {
      name: formData.name,
      hp: formData.hp,
      sprites: {front: formData.frontUrl, back: formData.backUrl}
    }    
    
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPokemonObj)
    })
      .then((res) => res.json())
      .then((newPokemon) => onAddPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites_front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites_back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
