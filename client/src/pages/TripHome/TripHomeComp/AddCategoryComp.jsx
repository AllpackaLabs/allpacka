import {useState} from "react";
import { tripContext } from '../../../context.js';

const AddCategoryComp = ({ show, currTrip, updateTrip }) => {

  const { currentTrip, setCurrentTrip } = useContext(tripContext);

  // update the current trip's category here?

  const [newCategory, setCategory] = useState('')

  const handleSubmit = () => {
    show(false)
  }

  return (
      <div className='category'>
      <div className='category-label'>
        <div className='add-item'>
        {/* add items to category by pressing " + " button */}
          <button className='add-item-btn' onClick={handleSubmit}>+</button>
        </div>
        <div className='category-name'>
          <input  type="text" 
                    value={newCategory} 
                    placeholder="New Category"
                    onChange={(e) => {setCategory(e.target.value)}}
                    className="input-field"
                    />
        </div>
      </div>
      <div>
        {/* {itemsArray}
        {showComponent && <AddItemsComp list={itemsArray} 
                                        show={setShowComponent}
                                        category={category}
                                        
                          />} */}
      </div>
    </div>
  )
}

export default AddCategoryComp;