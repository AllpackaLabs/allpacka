import React, {useEffect} from "react";
// import './MainItemsComponent.scss'
// child component of mainItemsComponent && parent componet of itemsDisplayComponet
import CategoryComponent from "./CategoryComponent";
import AddCategoryComp from "./AddCategoryComp.jsx";


const MainItemsComponent = ({ currentTrip, setCurrentTrip, showCat, setShowCat }) => {

    const categories = currentTrip.categories.map(category => {
        return <CategoryComponent items={category.items} 
                                    category={category.name} 
                                    key={category.name}
                                    currTrip={currentTrip}
                                    setCurrentTrip={setCurrentTrip}
                                    />
    })

    return (
        <div className='mainItemDisplay'>
            {/* {currentTrip.categories[0].name} */}
            <div className='items-legend'>
                <div id='item-legend-number'>
                    Checklist
                </div>
                <div id='item-legend-name'>
                    Name
                </div>
                <div id='item-legend-who'>
                    Who's Responsible
                </div>
            </div>
            <div className='displayedItems'>
               {categories}
               {showCat && <AddCategoryComp show={setShowCat} 
                                            currTrip={currentTrip}
                                            setCurrentTrip={setCurrentTrip}
                                            />}
            </div>
        </div>
    )
}


export default MainItemsComponent;