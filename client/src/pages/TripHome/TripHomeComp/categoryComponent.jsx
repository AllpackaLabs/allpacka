import React, { useState } from "react";
import ItemsDisplayComponent from "./itemsDisplayComponent.jsx";
import AddItemsComp from './AddItemsComp.jsx'
// import './CategoryComponent.scss';



const CategoryComponent = ({ items, category, setCurrentTrip, currTrip }) => {
  // State 
  const [showComponent, setShowComponent] = useState(false);

  const showAddItemComp = () => {
    setShowComponent(true)
  }

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
        {showComponent && <AddItemsComp list={items} 
                                        show={setShowComponent}
                                        category={category}
                                        setCurrentTrip={setCurrentTrip}
                                        currentTrip={currTrip}
                                        />}
      </div>
    </div>
   )
}


export default CategoryComponent
