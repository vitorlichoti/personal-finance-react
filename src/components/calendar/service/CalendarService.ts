import {monthList} from "../repository/CalendarRepository.ts";

function handleMonths (action: string, setPosition: React.Dispatch<React.SetStateAction<number>>, position: number) {
    if (action === 'decrement' && position === 0) {
        setPosition(11)
    } else if (action === 'decrement' && position !== 0) {
        setPosition(position - 1)
    }

    if (action === 'increment' && position === 11) {
        setPosition(0)
    } else if (action === 'increment' && position !== 11) {
        setPosition(position + 1)
    }
}

const handlePrevNextMonth = (action: string, position:number) => {
    if (position === 0 && action === 'prev') {
        return monthList[11]
    } else if (action === 'prev' && position !== 0) {
        return monthList[position - 1]
    }

    if (position === 11 && action === 'next') {
        return monthList[0]
    } else if (action === 'next' && position !== 11) {
        return monthList[position + 1]
    }

    return monthList[position]
}

export { handleMonths, handlePrevNextMonth }