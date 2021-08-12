import React from 'react';
import Header from '../Header/Header.jsx';
import ShoppingList from '../ShoppingList/ShoppingList';
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





    return (
        <div className="App">
            <Header />
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
