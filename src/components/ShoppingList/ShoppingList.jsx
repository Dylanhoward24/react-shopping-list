import React from 'react'
import './ShoppingList.css';
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
                        <div class= "itemName">
                        {item.name}
                        </div>
                        <div class="qtyUnit">
                        {item.quantity}
                        {item.unit}
                        </div>
                        <div class="buyRemove">
                        <button>Buy</button>
                        <button>Remove</button>
                        </div>
                    </li>
                 ))}
            </ul>
                
            
        </div>
    );
}

export default ShoppingList;
