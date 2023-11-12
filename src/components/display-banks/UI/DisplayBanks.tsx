import styles from './DisplayBanks.module.css'

function DisplayBanks() {
  return (
    <div className={styles.container}>
      <div className={styles.saldosContainer}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bolder'}}>Saldo</p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bolder'}}>R$: 0,00</p>
      </div>
      <div className={styles.saldosContainer} style={{ width: '80%'}}>
        <p style={{ fontSize: '1rem'}}>Banco Inter</p>
        <p style={{ fontSize: '1rem'}}>R$: 0,00</p>
      </div>
      <div className={styles.saldosContainer} style={{ width: '80%'}}>
        <p style={{ fontSize: '1rem'}}>Santander</p>
        <p style={{ fontSize: '1rem'}}>R$: 0,00</p>
      </div>
      <div className={styles.saldosContainer} style={{ width: '80%'}}>
        <p style={{ fontSize: '1rem'}}>Nubank</p>
        <p style={{ fontSize: '1rem'}}>R$: 0,00</p>
      </div>
    </div>
  )
}

export default DisplayBanks