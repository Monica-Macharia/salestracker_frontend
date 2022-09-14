import React, {useState} from 'react';


function UpdatePrice({ task, onUpdateTask }) {
    const [price, setPrice] = useState("0");

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/tasks/${task.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: price
        
          }),
        })
          .then((r) => r.json())
          .then((updatedPrice) => onUpdateTask(updatedPrice));
      }
      return(
          <form className = "updater" onSubmit= {handleSubmit}>
                <label>
              <em>Update Price:</em>
                <input type = "number" name="price" value= {price} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <label>
              <input type="submit" name="Update" />
        </label>
        </form>
      )
}
   
export default UpdatePrice;
