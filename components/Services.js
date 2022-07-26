//dependencies
import Image from 'next/image'
import product from '../sources/images/product.png'
import mobileapp from '../sources/images/mobile-app.png'
import fullstack from '../sources/images/full-stack.png'
import frontend from '../sources/images/frontend.png'
import cloud from '../sources/images/cloud-storage.png'
import data from '../sources/images/data.png'
import { useSelector } from 'react-redux'

// offering section
export default function Services() {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  return (
    <>
      <section
        className='w-full'
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center md:items-start'>
            <h2 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>
              You can hire me for
            </h2>
            <div className='offering md:my-3 my-2'>
              <h3 className='text-base lg:text-2xl md:my-2 md:w-1/2 flex items-center font-medium'>
                Writing Code{' '}
                <span className='mx-3'>
                  <Image src={data} width={30} height={30} alt='illustration' />
                </span>
              </h3>
              <p className='text-base md:my-2 md:w-1/2 font-light'>
                Coding along with your team on a large scale application to make
                your customers happy with new features and performance
                improvements.
              </p>
            </div>
            <div className='offering md:my-3 my-2'>
              <h3 className=' text-base lg:text-2xl md:my-2 md:w-1/2 flex  items-center font-medium'>
                MVP{' '}
                <span className='mx-3'>
                  <Image
                    src={product}
                    width={30}
                    height={30}
                    alt='illustration'
                  />
                </span>
              </h3>
              <p className='text-base  md:my-2 md:w-1/2 font-light'>
                Bringing your idea to code from zero to one as a minimal viable
                product (MVP) and beyond within a well-architected application.
              </p>
            </div>
            <div className='offering md:my-3 my-2'>
              <h3 className='text-base lg:text-2xl md:my-2 md:w-1/2 flex  items-center font-medium'>
                SaaS development{' '}
                <span className='mx-3'>
                  <Image
                    src={cloud}
                    width={30}
                    height={30}
                    alt='illustration'
                  />
                </span>
              </h3>
              <p className='text-base md:my-2 md:w-1/2 font-light'>
                Coding along with your team on a large scale application to make
                your customers happy with new features and performance
                improvements.
              </p>
            </div>
            <div className='offering md:my-3 my-2'>
              <h3 className=' text-base lg:text-2xl md:my-2 md:w-1/2 flex  items-center font-medium'>
                Full stack{' '}
                <span className='mx-3'>
                  <Image
                    src={fullstack}
                    width={30}
                    height={30}
                    alt='illustration'
                  />
                </span>
              </h3>
              <p className='text-base md:my-2 md:w-1/2 font-light'>
                Coding along with your team on a large scale application to make
                your customers happy with new features and performance
                improvements.
              </p>
            </div>
            <div className='offering md:my-3 my-2'>
              <h3 className=' text-base lg:text-2xl md:my-2 md:w-1/2 flex  items-center font-medium'>
                Mobile app <small> (react native)</small>
                <span className='mx-3'>
                  <Image
                    src={mobileapp}
                    width={30}
                    height={30}
                    alt='illustration'
                  />
                </span>
              </h3>
              <p className='text-base md:my-2 md:w-1/2 font-light'>
                Coding along with your team on a large scale application to make
                your customers happy with new features and performance
                improvements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
