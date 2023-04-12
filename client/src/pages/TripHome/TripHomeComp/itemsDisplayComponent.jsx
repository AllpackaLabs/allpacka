import React, {useState} from "react";
import './itemsDisplayComponent.scss'

// This component will render withing the category componet

const ItemsDisplayComponent = ({ item }) => {
    console.log(item.name)
    return (
      <div className='item-row'>
        <div className='item-btn-div'>
          <button className='item-btn'>√</button>
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
    )
  }



export default ItemsDisplayComponent;