import React, { useState, Suspence, Suspense } from "react";
import ItemsDisplayComponent from "./itemsDisplayComponent.jsx";
import './CategoryComponent.scss'
import AddItemsComponent from './AddItemsComponent.jsx'



const CategoryComponent = ({ items, category }) => {
  // State 
  const [showComponent, setShowComponent] = useState(false);


  // Show the input fields for the items
  const showAddItemComp = () => {
    setShowComponent(true)
  }
  
  const handleAddItem = () => {
    
  }


  // let item = items[0]   
  // each catagory will render ismt's associated items will be rendered 
  let i = 0
  const itemsArray = items.map((it) => {
   return <ItemsDisplayComponent item={it} key={i++}/>
  })

   return (
    <div className='category'>
      <div className='category-label'>
        <div className='add-item'>
        {/* add items to category by pressing " + " button */}
          <button className='add-item-btn' onClick={showAddItemComp}>+</button>
        </div>
        <div className='category-name'>
          {category}
        </div>
      </div>
      <div>
        {itemsArray}
        {showComponent && <AddItemsComponent list={items} show={showComponent}/>}
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