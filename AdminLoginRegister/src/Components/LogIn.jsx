import React from 'react'
import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'

function LogIn({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [isError, setError] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password ){
            setError(true); 
            return; 
        }
        setError(false) ; 
        onLogin(email, password); 

    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <FormControl isInvalid={isError && !email}>
                <FormLabel >Email</FormLabel>
                <Input type='email' value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                {!isError || email ? (
                <FormHelperText >Email-nizi daxil edin</FormHelperText> 
                ): (
                <FormErrorMessage> Email yanlisdir</FormErrorMessage> )}
            </FormControl>

            <FormControl mt={4} isInvalid={isError && !email} >
                <FormLabel >Password</FormLabel>
                <Input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                {!isError || password ? (
                    <FormHelperText >Parolunuzu daxil edin</FormHelperText> 
                ) : (
                    <FormErrorMessage >Parol yanlisdir!</FormErrorMessage>
                )}
            </FormControl>
            <Button type='submit' mt={4} colorScheme={'green'}>Submit</Button>
        </form>
    )
}

export default LogIn