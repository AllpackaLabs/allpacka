import React, {useState} from "react";

// NOTE we need items state
// category component is the parent

// This componet will take in the trips items array and display each 
// item with it's associated user who is bringing it


const addItemsComponent = () => (
  <div>
            {/* check box if item is claimed */}
    <label>
      <input type="checkbox" name="myCheckbox" />
    </label>
            {/* item count box  */}
    <label>
      <input type="text" value={numOfItems} name="numOfItems" onChange={setNumOfItems(e.target.value)}/>
    </label>
              {/* item name */}
    <label>
      <input type="text" value={itemName} name="itemName" onChange={setItemName(e.target.value)}/>
    </label>
              {/* Claimed by */}
    <label>
      <input type="text" value={itemClaimedByName} name="itemClaimedByName" onChange={setItemClaimedByName(e.target.value)}/>
    </label>
  </div>
)


export default addItemsComponent;