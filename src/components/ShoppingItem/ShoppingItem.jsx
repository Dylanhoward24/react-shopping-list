import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';

// import './GalleryItem.css'

function ShoppingItem({ item, onRemove }) {

    //   let [count, setCount] = useState(0);
    //   const onBuy = () => {
    //   setCount(count + 1);
    //   console.log("On Button Click", count);
    //   };

    // let id = item.id

    // const onRemove = () => {

    //     let id = item.id;

    //     axios({
    //         method: 'DELETE',
    //         url: '/list/' + id
    //     }).then((response) => {
    //         console.log('response is', response);
    //         fetchList();
    //     }).catch((error) => {
    //         console.log('DELETE /list error', error);
    //     });
    // }

  return (
    <>
      <li>
        <div class="itemName">
            {item.name}
        </div>
        <div class="qtyUnit">
          {item.quantity}
          {item.unit}
        </div>
        <div class="buyRemove">
          {/* <button onClick={onBuy}>Buy</button> */}
          {/* <button onClick={onRemove}>Remove</button> */}
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      </li>
    </>
  );
}

export default ShoppingItem;
