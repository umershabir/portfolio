//dependencies
import Image from 'next/image'
import logo from '../sources/images/us.png'
import { useSelector } from 'react-redux'

// herosection
export default function HeroSection() {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  const navigationLink =
    'https://assets.website-files.com/610baf44e0fca185ca8a93b0/610ce49a895b7afa262436b0_Arrow%20Icon.svg'
  return (
    <>
      <div
        className='w-full pt-6 md:pt-9'
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto flex flex-col px-4 md:px-0 pt-4 justify-evenly xl:min-h-screen'>
          <div className='intro-sect flex flex-col items-center md:items-start my-5 gap-y-5'>
            <div className='avatar'>
              <Image src={logo} width={128} height={128} alt='hero-image' />
            </div>
            <h1 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>
              Hello, {`I'm`} Umer Shabir 👋{' '}
            </h1>
            <p className=' text-base md:text-xl md:my-2 md:w-1/2'>
              I am Pakistan based JavaScript full stack developer at Terafort,
              <br />
              <span
                className=' text-base md:text-xl md:my-2 md:w-1/2'
                style={{ color: '#ffc83d' }}
              >
                {`"I work to bring life into Ideas."`}
              </span>
            </p>
            <div className='flex gap-x-2 text-2xl md:text-3xl'>
              {/* <a
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
              </a> */}
              <i className='fa-brands fa-html5'></i>
              <i className='fa-brands fa-css3'></i>
              <i className='fa-brands fa-js-square'></i>
              <i className='fa-brands fa-node-js'></i>
              <i className='fa-brands fa-react'></i>
              <i className='fa-solid fa-database'></i>
              <i className='fa-solid fa-server'></i>
            </div>
          </div>
          <div className='about-sect flex flex-col items-center md:items-start my-5'>
            <h2 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>About</h2>
            <p className='text-base md:my-2 md:w-1/2 font-light'>
              I'm BA English from Sargodha University turned to a full time
              JavaScript Developer based in Lahore Pakistan. I'v worded with
              different companies and on various projects you can have a look
              just below, Along my journey I try to sum up all my learning and
              what I have build into blogs to contribute in the open source
              world.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
