import React, { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");
  const [quantity,setQuantity] = useState(0);
  const [comment,setComment] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }

  function handleCommentChange(event){
    setComment(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number"/>
      <p>Quantity:{quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} type="string" placeholder="Enter delivery instruction"/>
      <p>Comment:{comment}</p>
    </div>
  );
}

export default OnChange;