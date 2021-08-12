import {useState} from 'react';

function ItemForm({
    onAddItem
}) {

const [newItemName, setNewItemName] = useState('')
const [newItemQuantity, setNewItemQuantity] = useState('')
const [newItemUnit, setNewItemUnit] = useState ('')

const onFormSubmit = (evt) => {
    console.log('on submit', newItemName, newItemQuantity, newItemUnit);
    
    let newItem = {
        name: newItemName,
        quantity: newItemQuantity,
        unit: newItemUnit
    };
    onAddItem(newItem);
}
 return (
    <>
    <h2>Add an Item:</h2>
    <form onSubmit={onFormSubmit}>
        <label>Item:</label>
        <input 
            type="text"
            placeholder="name"
            value={newItemName}
            onChange={evt => setNewItemName(evt.target.value)}
        />
        <label>Quantity:</label>
        <input
            type="number"
            placeholder="quantity"
            value={newItemQuantity}
            onChange={evt => setNewItemQuantity(evt.target.value)}
        />
        <label>Unit:</label>
        <input
            type="text"
            placeholder="unit type"
            value={newItemUnit}
            onChange={evt => setNewItemUnit(evt.target.value)}
        />
        <button>Save Item</button>
    </form> 
    </>
 )

}
 export default ItemForm;





