import React from 'react';
import Header from '../Header/Header.jsx';
import ShoppingList from '../ShoppingList/ShoppingList';
import ItemForm from '../ItemForm/ItemForm'
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

    const [shoppingList, setShoppingList] = useState([]); 

    useEffect(() => {
        console.log('in use effect');
        fetchList();
    }, []);

    const fetchList = () => {
        axios.get('/list'
        ).then((response) => {
            console.log('This is the response,', response.data);
            setShoppingList(response.data)
        }).catch(error =>{
            console.log('Get Fetch Data');
        });
    }

    const postItem = (newItem) => {
        axios({
            method: 'POST',
            url: '/list',
            data: newItem
        }).then(response => {
            console.log('response is', response);
            fetchList();
        }).catch(error =>{
            console.log('Post Failed', error);
        });
    }
   
    return (
        <div className="App">
            <Header />
            <ItemForm 
                onAddItem={postItem}/>
            <main>
                <p>Under Construction...</p>
            <ShoppingList 
                shoppingList={shoppingList}
            />
            
            </main>
        </div>
    );
}

export default App;
