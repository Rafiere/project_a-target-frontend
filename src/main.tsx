import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChakraProvider} from "@chakra-ui/react";
import customTheme from "./ui/theme/customTheme.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider theme={customTheme}>
        <App />
    </ChakraProvider>
)
