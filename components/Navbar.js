/* 
file name navbar
date: 20-07-22022
author: Umer
*/
// dependencies
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
// Navbar
export default function Navbar() {
  const theme = useSelector((state) => state.themeChangingReducer.value)
  const dispatch = useDispatch()
  const handleThemeChange = (e) => {
    dispatch({ type: `themeChanging/${e.target.checked}` })
  }
  return (
    <nav
      className='w-full p-3 md:p-5 '
      style={{
        background: theme.bg,
        borderBottom: '1px solid #ddd',
        color: theme.clr,
      }}
    >
      <div className='flex justify-between container mx-auto'>
        <div className='logo'>
          <Link href='/'>
            <a
              className='text-sm md:text-base'
              style={{ fontWeight: '600' }}
            >{`<Umer/>`}</a>
          </Link>
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', columnGap: '15px' }}>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href='/work'>
              <a>Work</a>
            </Link>
          </li>
          <li className='flex justify-center items-center'>
            <i
              className='fa-solid fa-sun text-xl'
              style={{ color: theme.themeOff }}
            ></i>

            <label
              htmlFor='small-toggle'
              className='inline-flex relative items-center cursor-pointer'
            >
              <input
                type='checkbox'
                value=''
                id='small-toggle'
                className='sr-only peer'
                onChange={handleThemeChange}
              />
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-300"></div>
            </label>
            <i
              className='fa-solid fa-moon text-xl'
              style={{ color: theme.fontClr }}
            ></i>
          </li>
        </ul>
      </div>
    </nav>
  )
}
