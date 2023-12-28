import {Button, Flex, Text} from "@chakra-ui/react";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ChevronLeftIcon, ChevronRightIcon, Icon} from "@chakra-ui/icons";

import {handlePrevNextMonth, handleMonths} from "../service/CalendarService.ts";

import { obterPrimeiroUltimoDiaDoMes } from "../service/CalendarDaysHandler.ts";
import { getBanksAndCategories } from "../service/CalendarGetResults.ts";
import LoggoutButton from "../../common/LoggoutButton.tsx";

interface CalendarProps {
    banksInfos: Dispatch<SetStateAction<never[]>>,
    categoryInfos: Dispatch<SetStateAction<never[]>>,
    balanceInfos: Dispatch<SetStateAction<never[]>>,
}

function Calendar({banksInfos, categoryInfos, balanceInfos}: CalendarProps) {
    const date: Date = new Date()
    const [position, setPosition] = useState(date.getMonth())

    useEffect(() => {
        const {from, to} = obterPrimeiroUltimoDiaDoMes(position)        
        // fazer um get em categorias e bancos do usuario e mandar as infos para os componentes por meio de props
        async function callInfos() {
            await getBanksAndCategories(banksInfos, categoryInfos, balanceInfos, from, to)
        }
        callInfos()
    }, [])
    

    return (
        <Flex alignItems='center' justifyContent="center" height="70px" bg="#161616">

            <Button
                _hover={{ bg: '#161616' }}
                _active={{ bg: '#363636'}}
                width='12px' variant="ghost"
                onClick={() => handleMonths('decrement', setPosition, position)}
            >
                <Icon
                    boxSize={8}
                    as={ChevronLeftIcon}
                    color="whiteAlpha.600"
                />
            </Button>

            <Text
                color="whiteAlpha.600"
                fontWeight="bold"
                fontSize={14}
                minWidth={95}
                textAlign="center"
            >
                {handlePrevNextMonth('prev', position)}
            </Text>

            <Text
                color="white" minWidth={95}
                fontWeight="extrabold"
                fontSize={20}
                textAlign="center"
            >
                {handlePrevNextMonth('curr', position)}
            </Text>

            <Text
                color="whiteAlpha.600"
                minWidth={95}
                fontWeight="bold"
                fontSize={14}
                textAlign="center"
            >
                {handlePrevNextMonth('next', position)}
            </Text>

            <Button
                _hover={{ bg: '#161616' }}
                _active={{ bg: '#363636'}}
                width='12px'
                variant="ghost"
                onClick={() => handleMonths('increment', setPosition, position)}
            >
                <Icon
                    boxSize={8}
                    as={ChevronRightIcon}
                    color="whiteAlpha.600"
                />
            </Button>

            <LoggoutButton />
        </Flex>
    )
}

export default Calendar
