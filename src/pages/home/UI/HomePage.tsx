import Calendar from "../../../components/calendar/UI/Calendar.tsx";
import {ChakraProvider} from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
// import '../global.css'
import Header from "../../../components/header/UI/Header.tsx";
import DisplayBanks from "../../../components/display-banks/UI/DisplayBanks.tsx";
import styles from "./HomePage.module.css"
import DisplayCategories from "../../../components/display-categories/UI/DisplayCategories.tsx";
import { useEffect, useState } from "react";
import handleIsAuthUser from "../../../utils/handleIsAuthUser.ts";

import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()

    const [banks, setBanks] = useState([])
    const [categories, setCategories] = useState([])
    const [balance, setBalance] = useState([])

    useEffect(() => {
        handleIsAuthUser(navigate)
    }, [])
    

    return (
        <ChakraProvider theme={theme}>
            <Calendar banksInfos={setBanks} categoryInfos={setCategories} balanceInfos={setBalance}/>
            {/*Virão os componentes da página: Mês Atual, Usuário, Entradas/Saídas/Balanço, Saldo das Carteiras, Gráficos por Categorias*/}
            <Header balance={balance} />
            <section className={styles.container}>
                <div className={styles.displays}>
                    <DisplayBanks banks={banks} />
                    <DisplayCategories categories={categories} />
                </div>
            </section>
        </ChakraProvider>
    )
}

export default HomePage
