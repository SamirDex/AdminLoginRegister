/* eslint-disable react/prop-types */
import React from 'react'
import "./../css/TableList.css"
import EditProductForm from './EditProductForm';
import { Button } from '@chakra-ui/react'
import { useState } from 'react';
import axios from 'axios';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'




function TableList( {productDatas , type, isAdmin, onDelete, url} ) {
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState(''); 
    const [editPrice, setEditPrice] = useState('');

    const handleEditClick = (product) => {
        setEditingId(product.id);
        setEditName(product.name);
        setEditPrice(product.price);
    };

    const handleSave = async (id) => {
        const response = await axios.put(`${url}/products/${id}`, {
            name: editName,
            price: editPrice,
        });
        if (response.status == 200) {
            setEditingId(null); 
        }
    };

    return (
        
        <div className='tableList'>
            <TableContainer>
                <Table>
                    <TableCaption>{type == "product" ? "Product Data" : "User Data"}</TableCaption>
                    <Thead>
                        {type == "product" ? (
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th isNumeric>Price</Th>
                                <Th isNumeric>Stock</Th>
                                <Th>Discount</Th>
                                {isAdmin && <Th>Edit</Th>}
                                {isAdmin && <Th>Delete</Th>}
                            </Tr>
                        ) : (
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                {isAdmin && <Th>Edit</Th>}
                                {isAdmin && <Th>Delete</Th>}
                            </Tr>
                        )}
                                    
                    </Thead>
                    <Tbody>
                    {productDatas.map(elem => (
                        <Tr key={elem.id} style={{ backgroundColor: type === "product" && elem.sale ? "#AFE1AF" : (elem.stockCount < 10 ? "#E4717A" : "") }}>
                            <Td>{elem.id}</Td>
                            <Td>{elem.name || elem.username}</Td>
                            {type === "product" && (
                            <>
                                <Td isNumeric>${elem.price}</Td>
                                <Td isNumeric>{elem.stockCount}</Td>
                                <Td>{elem.sale ? "YES" : "NO"}</Td>
                            </>
                            )}
                            {type === "user" && (
                            <Td>{elem.email}</Td>
                            )}
                            {isAdmin && (
                            <>
                                 <Td key={elem.id}>
                                    <Button colorScheme="blue" onClick={() => handleEditClick(elem)}>Edit</Button>
                                    {editingId === elem.id && (
                                        <EditProductForm
                                            editName={editName}
                                            setEditName={setEditName}
                                            editPrice={editPrice}
                                            setEditPrice={setEditPrice}
                                            handleSave={() => handleSave(elem.id)}
                                        />
                                    )}
                                </Td>
                                <Td><Button colorScheme='red' data-id={elem.id} onClick={() => {onDelete(elem.id)}}>Delete</Button></Td>
                            </>
                            )}
                        </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableList