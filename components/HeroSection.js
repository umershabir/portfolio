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
        className='w-full '
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto flex flex-col px-4 pt-4 justify-evenly items-center md:items-start'>
          <div className='intro-sect flex flex-col items-center md:items-start my-5'>
            <div className='avatar'>
              <Image src={logo} width={128} height={128} alt='hero-image' />
            </div>
            <h1 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>
              Hello, {`I'm`} Umer Shabir 👋{' '}
            </h1>
            <p className=' text-base lg:text-2xl md:my-2 md:w-1/2'>
              Pakistan based software engineer for MERN stack and React Native
              (cross plateform for ios and android mobile apps).
              <br />
              <span> I work for ideas to bring them in to life.</span>
            </p>
            <div className='flex gap-x-2 text-2xl'>
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
          <div className='about-sect flex flex-col items-center md:items-start my-5'>
            <h2 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>About</h2>
            <p className='text-base lg:text-xl md:my-2 md:w-1/2 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
              rerum. Veritatis optio aperiam voluptas minus delectus perferendis
              sapiente, dignissimos eum odio. Esse saepe praesentium eligendi
              aspernatur, repudiandae dignissimos rem placeat. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tempore labore quas id?
              Modi fugiat explicabo harum itaque ex quam, nostrum aliquam cum
              dolore, praesentium consectetur suscipit neque consequuntur
              corporis cupiditate.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
