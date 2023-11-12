import Balance from "../../balance/UI/Balance"
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.container}>
        <p className={styles.username}>Olá, Silvio</p>
        <hr className={styles.line} />
        <Balance />
    </div>
  )
}

export default Header