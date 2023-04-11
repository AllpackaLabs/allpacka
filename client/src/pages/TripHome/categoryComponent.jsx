import React, {useState} from "react";
import addItemsComponent from "./addItemsComponent";
import ItemsDisplayComponent from "./ItemsDisplayComponent.jsx";
// import './categoryComponent.scss'

// items display is the child Component
// should display each category and its items component inside
// we need to get catagory state in here, cATAGORY

const CategoryComponent = ({ items, category }) => {

  let i = 1;
  const handleAddItem = () => {
    // possibly adding some inputfield comp
    // rendering jsx 
  }
  // let item = items[0]   
  // each catagory will render ismt's associated items will be rendered 
  const itemsArray = items.map((it) => {
   return <ItemsDisplayComponent item={it} key={i++}/>
  })

   return (
    <div className='category'>
      <span className='categoryLabel'> {category} </span>
      <div>
        {/* add items to category by pressing " + " button */}
        <button onClick={handleAddItem}>+</button>
    </div>
      <div>
        {itemsArray}
      </div>
    </div>
   )
}


export default CategoryComponent




    //   {/* FOR REFERENCE - TO MOVE EACH CATEGORY COMPONENT*/
    //     /* <div
    //   draggable={true}
    //   onDragStart={e => console.log('onDragStart')}
    //   onDragEnd={e => console.log('onDragEnd')}
    //   >
    //   Drag source
    //   </div>

    //   <div
    //   onDragEnter={e => console.log('onDragEnter')}
    //   onDragLeave={e => console.log('onDragLeave')}
    //   onDragOver={e => { e.preventDefault(); console.log('onDragOver'); }}
    //   onDrop={e => console.log('onDrop')}
    //   >
    //   Drop target
    //   </div> */}