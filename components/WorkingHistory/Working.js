import { useSelector } from 'react-redux'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import { mywork } from './data'
export default function Working() {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  return (
    <>
      <div
        className='w-full pt-6 md:pt-9'
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto flex flex-col px-4 md:px-0 pt-4 mt-5'>
          <div className='intro-sect flex flex-col items-center md:items-start my-5'>
            <h1 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>
              Projects 📚
            </h1>
            <p className=' text-base md:my-2 md:w-1/2 md:text-xl'>
              {`A selection of projects I've worked on, during my career as a software developer.`}
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
          <div className='flex flex-col'>
            {mywork.map((item, index) => (
              <div key={index} className='flex flex-col md:flex-row my-2'>
                <Link href='/'>
                  <a className='md:w-1/2'>
                    <h3 className='text-base lg:text-2xl md:my-2 md:w-1/2 flex items-center font-medium'>
                      {item.heading}
                    </h3>
                    <p className='text-base md:my-2  font-light'>
                      {item.description}
                    </p>
                    <p className='underline'>Read more</p>
                  </a>
                </Link>
                <div className='md:w-1/2'>
                  <Image
                    src={item.image}
                    width={400}
                    height={200}
                    alt='project-image'
                    className='project-image'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
