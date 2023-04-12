import React, { useState, Suspence, Suspense } from "react";
import ItemsDisplayComponent from "./itemsDisplayComponent.jsx";
import AddItemsComp from './AddItemsComp.jsx'
import './CategoryComponent.scss';



const CategoryComponent = ({ items, category }) => {
  // State 
  const [showComponent, setShowComponent] = useState(false);


  // Show the input fields for the items
  const showAddItemComp = () => {
    setShowComponent(true)
  }
  
  const handleAddItem = () => {
    
  }

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
        {showComponent && <AddItemsComp list={itemsArray} 
                                        show={setShowComponent}
                                        category={category}
                                        
                          />}
      </div>
    </div>
   )
}


export default CategoryComponent
