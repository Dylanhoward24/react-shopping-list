import React from 'react'
import './ShoppingList.css';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

function ShoppingList({shoppingList, onRemove }) {
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
                    <ShoppingItem
                        key={item.id}
                        item={item}
                        onRemove={onRemove}
                    />
                 ))}
            </ul>
                
            
        </div>
    );
}

export default ShoppingList;
