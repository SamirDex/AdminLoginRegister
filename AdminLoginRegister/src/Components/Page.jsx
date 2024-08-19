
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableList from './TableList';
import Login from './Login';
import Register from './Register';
import { Button } from '@chakra-ui/react';
import "./../css/Page.css";


function Page() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [userDatas, setUserDatas] = useState([]); 
    const [productDatas, setProductDatas] = useState([]); 
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [showRegister, setShowRegister] = useState(false);



    const url = "https://66bf2b3142533c4031454a0a.mockapi.io/data/"; 


    useEffect(() => {
        axios(url + "products").then(res =>{
            setProductDatas(res.data); 
        })
    }, [])


    useEffect(() => {
        axios(url + "users").then(res =>{
            setUserDatas(res.data); 
        })
    }, [])

    const handleLogin = (email, password) => {
        const user = userDatas.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          setIsLoggedIn(true);
          setIsAdmin(user.isAdmin); 
        }
    };

    const handleRegister = (name, email, password) => {
        
        const newUser = {
            name, email, password, isAdmin: false
        }; 
        
        axios.post(url + "users", newUser).then(res => {
            setUserDatas([...userDatas], res.data) ; 
            setIsAdmin(false);
            setShowRegister(false)
        })
    }

    const handleDelete = (id) =>{
        let arr = [...productDatas]; 
        arr = arr.filter(elem => elem.id !=id); 
        setProductDatas(arr); 
        axios.delete(url + id);
    }

    return (
        <div className='container'>
            {!isLoggedIn ? (
                showRegister ? (
                    <Register onRegister={handleRegister} />
                ) : (
                    <Login onLogin={handleLogin} />
                )
            ) : (
                <div>
                    <TableList productDatas={productDatas} type="product" isAdmin={isAdmin} onDelete={handleDelete}/>
                </div>
            )}
            <Button onClick={() => setShowRegister(!showRegister)} mt={4} colorScheme={"blue"}>
                {showRegister ? "Go to Log in" : "Go to register"}
            </Button>
        </div>
        
    )
}

export default Page