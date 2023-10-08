import Calendar from "../components/calendar/UI/Calendar.tsx";
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import '../global.css'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                margin: 0,
                padding: 0,
                backgroundColor: '#121212',
                fontFamily: 'Roboto, sans-serif'
            },
        },
    },
})

function HomePage() {
    return (
        <ChakraProvider theme={theme}>
            {/*Virão os componentes da página: Mês Atual, Usuário, Entradas/Saídas/Balanço, Saldo das Carteiras, Gráficos por Categorias*/}
            <Calendar />
        </ChakraProvider>
    )
}

export default HomePage
