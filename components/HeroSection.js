//dependencies
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../sources/images/us.png'

// herosection
export default function HeroSection() {
  return (
    <>
      <div className={styles.info}>
        <div className='avatar'>
          <Image src={logo} width={128} height={128} alt='hero-image' />
        </div>
        <h1 style={{ fontWeight: 500 }}>{"I'm "} Umer Shabir.</h1>
        <p style={{ fontSize: '1.1rem' }}>
          Pakistan based software engineer for MERN stack and
          <br /> React Native(cross plateform for ios and android mobile apps).{' '}
          <br />
          <span className={styles.shake}>
            I work for ideas to bring in to life.
          </span>
        </p>
        <div className={styles.contact}>
          <a
            href='https://www.linkedin.com/in/umer-shabir-4a8545100/'
            target='blank'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/umershabir' target='blank'>
            <i className='fab fa-github'></i>
          </a>
          <a href='mailto:muhammadumershabir@gmail.com'>
            <i className='fa-solid fa-envelope'></i>
          </a>
          <a href=''>
            <i className='fa-brands fa-skype'></i>
          </a>
        </div>
      </div>
      <a href='#start' className={(styles.scrolldown, styles.scrollanchor)}>
        <img
          src='https://assets.website-files.com/610baf44e0fca185ca8a93b0/610ce49a895b7afa262436b0_Arrow%20Icon.svg'
          alt=''
          className={styles.scrolldownimage}
        ></img>
      </a>
    </>
  )
}
