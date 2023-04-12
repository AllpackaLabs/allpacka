import React, {useState} from "react";
import './itemsDisplayComponent.scss'

// This component will render withing the category componet

const ItemsDisplayComponent = ({ item }) => {
    console.log(item.name)
    return (
      <div className='item-row'>
        <div className='item'>
          <button>√</button>
        </div>
        <div className='item'>
          {item.number}
        </div>
        <div className='item'>
          {item.name}
        </div>
        <div className='item'>
          {item.user}
        </div>
      </div>
    )
  }



export default ItemsDisplayComponent;