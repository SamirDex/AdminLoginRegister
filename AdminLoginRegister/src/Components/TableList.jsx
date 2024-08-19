/* eslint-disable react/prop-types */
import React from 'react'
import "./../css/TableList.css"
import { Button } from '@chakra-ui/react'
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




function TableList( {productDatas , type, isAdmin, onDelete} ) {
    return (
        
        <div className='tableList'>
            <TableContainer>
                <Table>
                    <TableCaption>{type == "product" ? "Product Data" : "User Data"}</TableCaption>
                    <Thead>
                        {type == "product" ? (
                            <>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th isNumeric>Price</Th>
                                <Th isNumeric>Stock</Th>
                                <Th>Discount</Th>
                                {isAdmin && <Th>Edit</Th>}
                                {isAdmin && <Th>Delete</Th>}
                            </>
                        ) : (
                            <>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                {isAdmin && <Th>Edit</Th>}
                                {isAdmin && <Th>Delete</Th>}
                            </>
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
                                <Td><Button colorScheme='blue'>Edit</Button></Td>
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