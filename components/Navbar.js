/* 
file name navbar
date: 20-07-22022
author: Umer
*/
// dependencies
import Image from 'next/image'
import Link from 'next/link'
import umershabir from '../sources/images/umer.svg'
// Navbar
export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px',
        width: '100%',
        borderBottom: '1px solid #ccc',
        boxShadow: '',
      }}
    >
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src={umershabir} width={200} alt='logo' />
          </a>
        </Link>
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', columnGap: '15px' }}>
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
      </ul>
    </nav>
  )
}
