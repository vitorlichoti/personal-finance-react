const monthList: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

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

export { handleMonths, monthList }