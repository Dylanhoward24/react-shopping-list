import React from 'react'

function ShoppingList(shoppingList) {
                    // ^ response.data from app.jsx
    //Need onButton Click 
    const onButtonClick ={

    }



    return (
        <div>
            <h1> Shopping List</h1>
            <button onClick={onButtonClick}>Reset</button>
            <button onClick={onButtonClick}>Clear</button>
            
            {/* {shoppingList.map((item) => (
            <ul>
                {item.name}
                {item.quantity}
                {item.unit}
            </ul>
            ))} */}
            
            



           
            
        </div>
    );
}

export default ShoppingList;
