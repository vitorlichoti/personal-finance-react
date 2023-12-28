import { Progress } from 'antd';
import styles from "./DisplayCategories.module.css"

interface DisplayCategoriesProps {
  categories: never[]
}

function DisplayCategories({ categories }: DisplayCategoriesProps) {
  const percentage = 100  

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <p>Alimentação</p>
        <div className={styles.textProgressStatus}>
          <Progress className={styles.progress} percent={percentage} strokeWidth={12} status="active" strokeColor="#499F87" trailColor="#1E1E1E" showInfo={false}/>
          <span className={styles.valueText} style={{ left: `${percentage}%`}}>{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

export default DisplayCategories