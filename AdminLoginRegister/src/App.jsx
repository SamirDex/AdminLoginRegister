import Page from "./Components/Page"; 
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {

    return (
        <>
            <ChakraProvider>
                <Page />
            </ChakraProvider>
        </>
    )
}

export default App
