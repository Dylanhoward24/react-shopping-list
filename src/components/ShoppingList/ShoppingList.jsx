import React from 'react'

function ShoppingList({shoppingList}) {
                    // ^ response.data from app.jsx
    //Need onButton Click 
    // const onButtonClick ={

    // }



    return (
        <div>
            <h1> Shopping List</h1>

            {/* make these do something */}
            <button>Reset</button>
            <button>Clear</button>

            {console.log(shoppingList)}
            
            <ul>
                {shoppingList.map((item) => (
                    <li>
                        {item.name}
                        {item.quantity}
                        {item.unit}
                    </li>
                 ))}
            </ul>
                
            
        </div>
    );
}

export default ShoppingList;
