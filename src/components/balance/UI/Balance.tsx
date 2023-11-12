import ArrowUpOutlined from "@ant-design/icons/lib/icons/ArrowUpOutlined"
import ArrowDownOutlined from "@ant-design/icons/lib/icons/ArrowDownOutlined"
import ArrowRightOutlined from "@ant-design/icons/lib/icons/ArrowRightOutlined"
import styles from "./Balance.module.css"

function Balance() {
  return (
    <div className={styles.container}>

        <div className={styles.results}>
            <ArrowUpOutlined style={{ color:'#78A272', fontSize: '28px'}}/>
            <p className={styles.currency} style={{ color:'#78A272', marginLeft: '6px'}}>R$</p>
            <p style={{ color:'#78A272', fontSize: '1.4rem'}}>0,00</p> 
        </div>

        <div className={styles.results}>
            <ArrowDownOutlined style={{ color:'#DA6A68', fontSize: '28px'}}/>
            <p className={styles.currency} style={{ color:'#DA6A68', marginLeft: '6px'}}>R$</p>
            <p style={{ color:'#DA6A68', fontSize: '1.4rem'}}>0,00</p> 
        </div>

        <div className={styles.results}>
            <ArrowRightOutlined style={{ color:'#9F9885', fontSize: '28px'}}/>
            <p className={styles.currency} style={{ color:'#9F9885', marginLeft: '6px'}}>R$</p>
            <p style={{ color:'#9F9885', fontSize: '1.4rem'}}>0,00</p> 
        </div>

    </div>
  )
}

export default Balance