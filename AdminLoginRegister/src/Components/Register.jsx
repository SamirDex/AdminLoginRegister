import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button } from '@chakra-ui/react';

function Register({onRegister}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [confirmedPassword, setConfirmedPassword] = useState(''); 
    const [isError, setIsError] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(!email || !password || password !=confirmedPassword || !name ){
            setIsError(true); 
            return; 

        }
        setIsError(false); 
        onRegister(name, email, password); 
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <FormControl isInvalid={!name && isError}>
                <FormLabel>
                    Name
                </FormLabel>
                <Input type='text' value={name} onChange={(e) => {setName(e.target.value)}}/>
            </FormControl>

            <FormControl isInvalid={!email && isError} mt={4}>
                <FormLabel>
                    Email
                </FormLabel>
                <Input type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                {!isError || email ? (
                <FormHelperText>
                    Emailinizi daxil edin
                </FormHelperText>
                ) : (
                <FormErrorMessage>Email Vacibdir</FormErrorMessage>
                )}
            </FormControl>

            <FormControl isInvalid={!password && isError} mt={4}>
                <FormLabel>
                    Password
                </FormLabel>
                <Input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                {!isError || password ? (
                <FormHelperText>
                    Guclu parol daxil edin
                </FormHelperText>
                ) : (
                <FormErrorMessage>Parol vacibdir</FormErrorMessage>
                )}
            </FormControl>

            <FormControl isInvalid={!confirmedPassword && isError} mt={4}>
                <FormLabel>
                    Parolu Testiqleyin
                </FormLabel>
                <Input type='password' value={confirme} onChange={(e) => {setConfirmedPassword(e.target.value)}}/>
                {!isError || (password == confirmedPassword) ? (
                <FormHelperText>
                    Parolunuzu yeniden daxil edin 
                </FormHelperText>
                ) : (
                <FormErrorMessage>Parol yanlisdir</FormErrorMessage>
                )}
            </FormControl>
            <Button mt={4} colorScheme={'green'} type='submit'>
                Register
            </Button>
        </form>
    )
}

export default Register