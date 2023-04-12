import React, {useState} from "react";

// NOTE we need items state
// category component is the parent

// This componet will take in the trips items array and display each 
// item with it's associated user who is bringing it


const AddItemsComponent = ({ }) => {


  return (
    <div>
      <div className='item-row'>
        <div className='item-btn-div'>
          <button className='item-btn'>+</button>
        </div>
        <div className='item-num'>
          {item.number}
        </div>
        <div className='item-name'>
          {item.name}
        </div>
        <div className='item-user'>
          {item.user}
      </div>
    </div>
    {/* <div>
      <input type="checkbox" name="myCheckbox" />
    </div>
      
    <div>
      <input type="text" value={''} name="numOfItems" onChange={setNumOfItems(e.target.value)}/>
    </div>
          
    <div>
      <input type="text" value={''} name="itemName" onChange={setItemName(e.target.value)}/>
    </div>
        
    <div>
      <input type="text" value={.} name="itemClaimedByName" onChange={setItemClaimedByName(e.target.value)}/>
    </div> */}
  </div>
  )
}


export default AddItemsComponent;