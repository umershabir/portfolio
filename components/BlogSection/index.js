// dependencies
import React from 'react'
import { mostRecentWork } from './data'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Image from 'next/image'
//Working History component
export default function BlogSection() {
  const theme = useSelector((state) => state.themeChangingReducer.value)

  return (
    <>
      <section
        className='w-full py-5'
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto px-4 md:px-0'>
          <div className='flex flex-col'>
            <h2 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>
              Latest Blogs
            </h2>
            {mostRecentWork.map((item, index) => (
              <div key={index} className='flex flex-col md:flex-row my-2'>
                <Link href='/'>
                  <a className='md:w-1/2'>
                    <h3 className='text-base lg:text-2xl md:my-2 md:w-1/2 flex items-center font-medium'>
                      {item.heading}
                    </h3>
                    <p className='text-base md:my-2  font-light '>
                      {item.description}
                    </p>
                    <Link href='/blog'>
                      <a className='underline'>Read more </a>
                    </Link>
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
          <Link href='/blog'>
            <a className='hover:underline'>
              Explore more <i className='fa-solid fa-arrow-right-long'></i>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}
