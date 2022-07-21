//dependencies
import Image from 'next/image'
import product from '../sources/images/product.png'
import mobileapp from '../sources/images/mobile-app.png'
import fullstack from '../sources/images/full-stack.png'
import frontend from '../sources/images/frontend.png'

import cloud from '../sources/images/cloud-storage.png'

import data from '../sources/images/data.png'
import styles from '../styles/Home.module.css'
export default function Services() {
  return (
    <>
      <section className={styles.offeringsection}>
        <h2 style={{ fontWeight: 500, marginBottom: 0 }}>WHAT I OFFER</h2>
        <p style={{ fontWeight: 500, marginTop: 10 }}>
          WHY YOU MIGHT WANT TO HIRE ME.
        </p>
        <div className={styles.myoffers}>
          <div className={styles.offering}>
            <div className='icon'>
              <Image src={data} width={50} height={50} alt='illustration' />{' '}
            </div>
            <h3>Writing Code</h3>
            <p style={{ textAlign: 'center', marginTop: 0 }}>
              Coding along with your team on a large scale application to make
              your customers happy with new features and performance
              improvements.
            </p>
          </div>
          <div className={styles.offering}>
            <div className='icon'>
              <Image src={product} width={50} height={50} alt='illustration' />
            </div>
            <h3>MVP</h3>
            <p style={{ textAlign: 'center', marginTop: 0 }}>
              Bringing your idea to code from zero to one as a minimal viable
              product (MVP) and beyond within a well-architected application.
            </p>
          </div>

          <div className={styles.offering}>
            <div className='icon'>
              <Image src={cloud} width={50} height={50} alt='illustration' />{' '}
            </div>
            <h3>SaaS development</h3>
            <p style={{ textAlign: 'center', marginTop: 0 }}>
              Coding along with your team on a large scale application to make
              your customers happy with new features and performance
              improvements.
            </p>
          </div>
          <div className={styles.offering}>
            <div className='icon'>
              <Image
                src={fullstack}
                width={50}
                height={50}
                alt='illustration'
              />{' '}
            </div>
            <h3>Full stack</h3>
            <p style={{ textAlign: 'center', marginTop: 0 }}>
              Coding along with your team on a large scale application to make
              your customers happy with new features and performance
              improvements.
            </p>
          </div>
          {/* <div className={styles.offering}>
            <div className='icon'>
              <Image src={frontend} width={50} height={50} />{' '}
            </div>
            <h3>Frontend development</h3>
            <p style={{ textAlign: 'center', marginTop: 0 }}>
              Coding along with your team on a large scale application to make
              your customers happy with new features and performance
              improvements.
            </p>
          </div> */}

          <div className={styles.offering}>
            <div className='icon'>
              <Image
                src={mobileapp}
                width={50}
                height={50}
                alt='illustration'
              />{' '}
            </div>
            <h3>
              Mobile app<small>(react native)</small>
            </h3>
            <p>
              Coding along with your team on a large scale application to make
              your customers happy with new features and performance
              improvements.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
