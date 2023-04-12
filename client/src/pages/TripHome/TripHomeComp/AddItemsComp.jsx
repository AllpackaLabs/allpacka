import React, {useState} from "react";
import "./AddItemsComp.scss";

// NOTE we need items state
// category component is the parent

// This componet will take in the trips items array and display each 
// item with it's associated user who is bringing it


const AddItemsComp = ({ list, show, category}) => {
    // Getting use context into here is the next big challenge

    // this is the state of the component
    const [numItem, setNumItem] = useState('');
    const [itemName, setItemName] = useState('');
    const [claimedBy, setClaimedBy] = useState('');
    

    const handleSetNumItem = (e) => {
        setNumItem(e.target.value)
    }
    const handleSetItemName = (e) => {
        setItemName(e.target.value)
    }
    const handleSetClaimedBy = (e) => {
        setClaimedBy(e.target.value)
    }


    const handleSubmit = () => {
        // unmount the input fields and reset 
        show(false);
        setClaimedBy('');
        setItemName('');
        setNumItem('')
    }


    return (
    <div className='input-row'>
        <div className='add-btn-div'>
            <button className='add-btn' 
                    onClick={handleSubmit}>add</button>
        </div>
        <div className='input-num'>
            <input  type="text" 
                    value={numItem} 
                    placeholder="#"
                    onChange={handleSetNumItem}
                    className="input-field"
                    />
        </div>
        <div className='input-name'>
            <input  type="text" 
                    value={itemName} 
                    placeholder="What are you bringing?"
                    onChange={handleSetItemName}
                    className="input-field"
                    />
        </div>
        <div className='input-user'>
            <input  type="text" 
                    value={claimedBy} 
                    placeholder="Who's Bring it?"
                    onChange={handleSetClaimedBy}
                    className="input-field"
                    />
        </div>
  </div>
  )
}


export default AddItemsComp;