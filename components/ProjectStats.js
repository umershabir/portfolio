import styles from '../styles/Home.module.css'
export default function ProjectStats() {
  return (
    <>
      <section className={styles.counter}>
        <div className={styles.counterinner}>
          <div className={styles.counterlist}>
            <h2>1</h2>
            <p>PROJECTS COMPLETED</p>
          </div>
          <div className={styles.counterlist}>
            <h2>2+</h2>
            <p>YEARS EXPERIENCE</p>
          </div>
          <div className={styles.counterlist}>
            <h2>1</h2>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </section>
    </>
  )
}
