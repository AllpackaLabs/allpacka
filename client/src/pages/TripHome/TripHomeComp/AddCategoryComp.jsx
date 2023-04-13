import {useState, useContext} from "react";
import { tripContext } from '../../../context.js';

const AddCategoryComp = ({ show, currTrip, updateTrip }) => {

  // update the current trip's category here?
  const [newCategory, setCategory] = useState('')

  const handleSubmit = () => {
    update(currTrip.categories.push(newCategory))
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
    </div>
  )
}

export default AddCategoryComp;