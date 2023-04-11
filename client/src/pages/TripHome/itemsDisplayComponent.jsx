import React, {useState} from "react";

// This component will render withing the category componet

const ItemsDisplayComponent = ({ item }) => {
    console.log(item.name)
    return (
        <div className='ItemRow'>
        {/* check box if item is claimed */}
        <div>
            <button className='checkedItem'>√</button>
        </div>
        <div className='itemNumber'>
            // <span>{item.number}</span>
        </div>
        <div className='itemName'>
          <span>{item.name}</span>
        </div>
        <div className='itemUser'>
            <span>{item.user}</span>
        </div>
      </div>
    )
  }



export default ItemsDisplayComponent;