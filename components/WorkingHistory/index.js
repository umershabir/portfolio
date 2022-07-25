// dependencies
import React from 'react'
import { mostRecentWork } from './data'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Image from 'next/image'
//Working History component
export default function WorkingHistory() {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <section
        className='w-full'
        style={{ background: theme.bg, color: theme.clr }}
      >
        <div className='container mx-auto px-3'>
          <div className='flex flex-col'>
            <h2 className='text-2xl lg:text-5xl md:text-3xl md:my-2'>
              Recent Projects
            </h2>
            {mostRecentWork.map((item, index) => (
              <div key={index}>
                <div>{item.heading}</div>
              </div>
            ))}
          </div>
          <Link href='/work'>
            <a className='hover:underline'>
              Explore more <i className='fa-solid fa-arrow-right-long'></i>
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}
