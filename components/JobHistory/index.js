//dependencies
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { jobHistory } from './data'

// offering section
export default function JobHistory() {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  return (
    <>
      <section
        className='w-full md:p-5'
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto px-4 md:px-0'>
          <div className='flex flex-col'>
            <h2 className='text-2xl lg:text-5xl md:text-3xl md:my-2 text-center md:text-left'>
              Work History
            </h2>
            {jobHistory.map((item, index) => (
              <div
                className='job md:my-3 my-2 flex items-center gap-x-3'
                key={index}
              >
                <span className=''>
                  <Image
                    src={item.logo}
                    width={70}
                    height={70}
                    alt='logo-image'
                    style={{ borderRadius: '50px' }}
                  />
                </span>
                <div className='flex flex-col'>
                  <h3
                    className='text-base lg:text-2xl  
                  font-medium md:my-2'
                  >
                    {item.name}
                  </h3>
                  <p className='text-base'>{item.title}</p>
                  <p className='text-sm text-gray-500'>{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
