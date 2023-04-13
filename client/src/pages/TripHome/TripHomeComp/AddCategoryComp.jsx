import {useState} from "react";

const AddCategoryComp = () => {


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

export default AddCategoryComp;