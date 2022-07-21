// dependencies
import styles from '../../styles/Home.module.css'
import { mywork } from './data'
import Link from 'next/link'
import Image from 'next/image'
//Working History component
export default function WorkingHistory() {
  return (
    <>
      <section className={styles.work}>
        <h2 style={{ fontWeight: 500, margin: 0 }}>Work examples</h2>
        <p style={{ fontWeight: 500, margin: '10px 0 0 0' }}>
          {`Some example of work I've done for clients previously.`}
        </p>
        <div className={styles.experience}>
          {mywork.map((item, index) => (
            <a
              href={item.link}
              style={{
                padding: '1rem',
                width: '33%',
              }}
              key={index}
            >
              <div style={{ position: 'relative' }}>
                <Image
                  loader={() => item.image}
                  src={item.image}
                  alt='project image'
                  width={300}
                  height={200}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    color: '#E4E5E5',
                  }}
                >
                  {item.heading}
                </span>
              </div>
            </a>
          ))}
        </div>
        <Link href='/work'>
          <a className={styles.exploremore}>Explore more</a>
        </Link>
      </section>
    </>
  )
}
